import React from 'react';
import RocketsItem from './RocketsItem';

const Rockets = () => {
  const rocketHub = [{
    name: 'Falcon',
    id: 1,
    subName: 'express',
  }];
  return (
    <div>
      <h1>Rockets</h1>
      <RocketsItem rocketHub={rocketHub} />
    </div>
  );
};

export default Rockets;
