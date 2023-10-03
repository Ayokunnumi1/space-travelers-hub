import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    mission, description, status, action,
  } = props;
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td className="wide-td"><p className="status">{status}</p></td>
      <td className="wide-td"><button type="button" className="active-btn">{action}</button></td>
    </tr>

  );
};
Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default Mission;
