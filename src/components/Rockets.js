import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import RocketsItem from './RocketsItem';
// import { getDataFromServer } from '../redux/Rockets/RocketsSlice';

const Rockets = () => {
  const selectedData = useSelector((state) => state.rockets);
  const { loading, error, rocketData } = selectedData;
  console.log(rocketData);

  return (
    <ul>
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
