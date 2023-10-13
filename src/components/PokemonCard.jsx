import PropTypes from "prop-types";
function PokemonCard({ pokemon }) {
  PokemonCard.propTypes = {
    props: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
  return (
    <figure className="card">
      {pokemon.imgSrc ? (
        <img className="card-img" src={pokemon.imgSrc} />
      ) : (
        <p>????</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
