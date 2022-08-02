import PropTypes from 'prop-types';
import { CardContainer } from './styled';
export const StackCard = ({ icon, name }) => {
  return (
    <CardContainer>
      <div>{icon}</div>
      <h5>{name}</h5>
      <span></span>
    </CardContainer>
  );
};

StackCard.propTypes = {
  icon: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};
