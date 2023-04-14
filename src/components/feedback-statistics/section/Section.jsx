import PropTypes from 'prop-types';
import { StyledSection, StyledTitle } from './StyledSection';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
