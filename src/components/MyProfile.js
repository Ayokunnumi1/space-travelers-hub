import React from 'react';
import { useSelector } from 'react-redux';
import '../modules/Profile.css';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  const missionData = useSelector((state) => state.missions.missions);
  const filterMissions = missionData.filter((mission) => mission.reserved);
  // console.log(rocketData);
  return (
    <>
      <div className="profile">
        <div className="mission-profile">
          <h2>Missions</h2>
          <ul>
            {
            filterMissions.map(
              (mission) => <li key={mission.mission_id}>{ mission.mission_name}</li>,
            )
            }
          </ul>
        </div>
        <div className="rocket-profile">
          <p>Rockets</p>
          <ul>
            {filterRockets.map((rocket) => <li key={rocket.id}>{ rocket.name}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
