import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const RocketsItem = ({ rocket }) => {
  const imgUrl = rocket.image;
  return (

    <li>
      <img alt="rocket" src={imgUrl} style={{ width: '200px' }} />
      <p>{ rocket.name}</p>
      <p>{rocket.description}</p>
      <button type="submit">Reserve Rocket</button>
    </li>

  );
};

RocketsItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketsItem;
