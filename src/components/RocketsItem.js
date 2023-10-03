/* eslint-disable react/prop-types */
// eslint-disable-next-line arrow-body-style
const RocketsItem = ({ rocketHub }) => {
  return (
    <ul>
      {
                rocketHub.map((rocket) => (

                  <li key={rocket.id}>
                    { rocket.name}
                    <p>{rocket.subName}</p>
                  </li>

                ))
            }
    </ul>
  );
};
export default RocketsItem;
