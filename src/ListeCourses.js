import PropTypes from 'prop-types';

export default function ListeCourses({ objets }) {
  return (
    <ul>
      {objets.map((objet, index) => (
        <li key={index}>{objet}</li>
      ))}
    </ul>
  );
}

ListeCourses.propTypes = {
  objets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

