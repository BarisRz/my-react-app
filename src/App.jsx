import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[count % 2]} />
      </div>
      <button onClick={handleClick}>Précedent</button>
      <button onClick={handleClick}>Suivant</button>
    </>
  );
}

export default App;
