import { useSelector } from 'react-redux';
import '../modules/Rocket.css';
import RocketsItem from './RocketsItem';

const Rockets = () => {
  const selectedData = useSelector((state) => state.rockets);
  const { loading, error, rocketData } = selectedData;
  console.log(rocketData);

  return (
    <ul className="rocket-container">
      {loading && <p>Loading</p>}
      {error && <p>Error...</p>}
      {
        rocketData.map((rocket) => (
          <RocketsItem key={rocket.id} rocket={rocket} />
        ))
      }
    </ul>
  );
};

export default Rockets;
