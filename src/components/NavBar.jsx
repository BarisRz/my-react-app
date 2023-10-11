/* eslint-disable react/prop-types */
function NavBar({ pokemonList, onSelection }) {
  const handleClick = (index) => {
    if (pokemonList[index].name === "Pikachu") {
      alert("Pikachuuuuuuuuuuuuuu");
      onSelection(index);
    } else {
      onSelection(index);
    }
  };
  return (
    <div className="pokemonListe">
      {pokemonList.map((element, index) => (
        <button key={element.name} onClick={() => handleClick(index)}>
          {element.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;
