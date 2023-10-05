import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  // console.log(rocketData);
  return (
    <>
      <p>Rockets</p>
      <ul>
        {rocketData.map((rocket) => rocket.reserved && (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>

    </>
  );
};

export default MyProfile;
