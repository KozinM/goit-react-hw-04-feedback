import React, { useState } from 'react';
import FeedbackOptions from './FeedBackOptions/feedBackOptions';
import Section from './Section/section';
import Statistics from './Statistics/statistics';
import Notification from './Notification/notification';

export const App = ()=>{

  //state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //functions
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() ? Math.floor((good * 100) / countTotalFeedback())
      : 0;
  

  const onLeaveFeedback = event => {
    const name = event.currentTarget.name;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  }

  const onClearFeedback = event => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }


    const states = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={states}
            onLeaveFeedback={onLeaveFeedback}
            onClearFeedback={onClearFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback is given" />
          )}
        </Section>
      </div>
    );

}
/* 
export class oldApp extends Component {
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
} */
