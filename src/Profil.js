import PropTypes from 'prop-types';

export default function Profil({ utilisateur, taille }) {
  return (
    <div>
      <img src={utilisateur.photo} width={taille} alt={utilisateur.nom} />
      <p>{utilisateur.nom}</p>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 100,
};

