// Voiture.js
import PropTypes from 'prop-types';

export default function Voiture({ marque, modele, couleur }) {
  return (
    <p>
      Voiture : {marque} {modele}, Couleur : {couleur}
    </p>

  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string,
};