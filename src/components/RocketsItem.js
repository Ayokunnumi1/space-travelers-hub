import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserved } from '../redux/Rockets/RocketsSlice';

const RocketsItem = ({ rocket }) => {
  // const { rocketData } = useSelector((state) => state.rockets);
  // console.log(rocketData);
  const imgUrl = rocket.image;
  const dispatch = useDispatch();
  const reserveRocket = (buttonId) => {
    dispatch(reserved(buttonId));
  };
  return (
    <li>
      <img alt="rocket" src={imgUrl} style={{ width: '200px' }} />
      <p>{rocket.name}</p>
      { rocket.reserved && <span>Reserved</span>}
      <p>{rocket.description}</p>
      <button
        onClick={() => reserveRocket(rocket.id)}
        className={rocket.reserved ? 'cancel-reserve' : 'reserve-rocket'}
        type="submit"
      >
        {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}

      </button>
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
    reserved: PropTypes.bool,
    cancelled: PropTypes.bool,
  }).isRequired,
};

export default RocketsItem;
