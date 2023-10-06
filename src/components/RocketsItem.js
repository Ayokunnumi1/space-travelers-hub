import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserved } from '../redux/Rockets/RocketsSlice';
import '../modules/RocketsItem.css';

const RocketsItem = ({ rocket }) => {
  // const { rocketData } = useSelector((state) => state.rockets);
  // console.log(rocketData);
  const imgUrl = rocket.image;
  const dispatch = useDispatch();
  const reserveRocket = (buttonId) => {
    dispatch(reserved(buttonId));
  };
  return (
    <li className="rocket-content">
      <img className="rocket-content-right" alt="rocket" src={imgUrl} style={{ width: '250px' }} />
      <div className="rocket-content-left">
        <p className="rocket-name">{rocket.name}</p>
        <p className="rocket-desc">
          { rocket.reserved && <span className="reserved">Reserved</span>}
          {rocket.description}

        </p>
        <button
          onClick={() => reserveRocket(rocket.id)}
          className={rocket.reserved ? 'cancel-reserve-btn' : 'reserve-rocket-btn'}
          type="submit"
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
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
