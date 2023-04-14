import PropTypes from 'prop-types';
import {
  StyledFeedbackOptions,
  StyledFeedbackBtn,
} from './StyledFeedbackOptions';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <StyledFeedbackOptions>
      <StyledFeedbackBtn type="button" onClick={onLeaveFeedback}>
        Good
      </StyledFeedbackBtn>
      <StyledFeedbackBtn type="button" onClick={onLeaveFeedback}>
        Neutral
      </StyledFeedbackBtn>
      <StyledFeedbackBtn type="button" onClick={onLeaveFeedback}>
        Bad
      </StyledFeedbackBtn>
    </StyledFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
