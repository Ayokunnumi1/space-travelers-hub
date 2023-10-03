import { nanoid } from '@reduxjs/toolkit';
import Mission from './Mission';

const myList = [
  {
    mission: 'Thiacome',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Unde exercitationem necessitatibus deleniti dolores modi
    odio quis nesciunt expedita est iusto libero, harum officia
    architecto pariatur temporibus consectetur impedit distinctio
    veniam.`,
    status: 'NOT A MEMBER',
    action: 'Join Mission',

  },
  {
    mission: 'Telstar',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Unde exercitationem necessitatibus deleniti dolores modi
    odio quis nesciunt expedita est iusto libero, harum officia
    architecto pariatur temporibus consectetur impedit distinctio
    veniam.`,
    status: 'ACTIVE MEMBER',
    action: 'Leave Mission',

  },

];

const Missions = () => (
  <table>
    <thead>
      <th>
        Mission
      </th>
      <th>
        Description
      </th>
      <th>
        Status
      </th>
      <th>
        Action
      </th>
    </thead>
    <tbody>
      {myList.map((mission) => (
        <Mission
          key={nanoid}
          mission={mission.mission}
          description={mission.description}
          status={mission.status}
          action={mission.action}
        />
      ))}
    </tbody>
  </table>
);

export default Missions;
