import PropTypes from 'prop-types';
import styles from './style.module.css';

const FeedbackOptions = (props) => {
  return (
    <div>
      {props.options.map(option => (
        <button
          className={styles.btn}
          key={option}
          name={option}
          onClick={props.onLeaveFeedback}
        >
          {option}
        </button>
      ))}
      <button
        className={styles.btnClear}
        key="clears"
        name="clear"
        onClick={props.onClearFeedback}
        >
          clear
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onClearFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;