import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  // console.log(rocketData);
  return (
    <>
      <p>Rockets</p>
      <ul>
        {filterRockets.map((rocket) => <li key={rocket.id}>{ rocket.name}</li>)}
      </ul>

    </>
  );
};

export default MyProfile;
