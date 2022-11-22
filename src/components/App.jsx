import React, { Component } from 'react';
import FeedbackOptions from './FeedBackOptions/feedBackOptions';
import Section from './Section/section';
import Statistics from './Statistics/statistics';
import Notification from './Notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  onLeaveFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  onClearFeedback = event => {
    this.setState({good: 0, neutral: 0, bad: 0});
  }

  render() {
    const { good, neutral, bad } = this.state;
    const states = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={states}
            onLeaveFeedback={this.onLeaveFeedback}
            onClearFeedback={this.onClearFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback is given" />
          )}
        </Section>
      </div>
    );
  }
}
