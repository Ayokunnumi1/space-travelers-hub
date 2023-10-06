import React from 'react';
import { useSelector } from 'react-redux';
import '../modules/Profile.css';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  // console.log(rocketData);
  return (

    <div className="profile">
      <div>Missions</div>
      <div className="rocket-profile">
        <p>Rockets</p>
        <ul>
          {filterRockets.map((rocket) => <li key={rocket.id}>{ rocket.name}</li>)}
        </ul>
      </div>
    </div>

  );
};

export default MyProfile;
