/* eslint-disable react/prop-types */
function NavBar({ pokemonList }) {
  return (
    <div className="pokemonListe">
      {pokemonList.map((element) => (
        <button key={element.name}>{element.name}</button>
      ))}
    </div>
  );
}
export default NavBar;
