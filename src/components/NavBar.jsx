/* eslint-disable react/prop-types */
function NavBar({ pokemonList, onSelection }) {
  return (
    <div className="pokemonListe">
      {pokemonList.map((element, index) => (
        <button key={element.name} onClick={() => onSelection(index)}>
          {element.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;
