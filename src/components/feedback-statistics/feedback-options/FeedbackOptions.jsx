import PropTypes from 'prop-types';
import {
  StyledFeedbackOptions,
  StyledFeedbackBtn,
} from './StyledFeedbackOptions';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledFeedbackOptions>
      {options.map((option, index) => {
        return (
          <StyledFeedbackBtn
            type="button"
            onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </StyledFeedbackBtn>
        );
      })}
    </StyledFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
