import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Caterpie",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const addClick = () => {
    setCount(count + 1);
  };
  const removeClick = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <NavBar
          count={count}
          tailleListe={pokemonList.length}
          add={addClick}
          remove={removeClick}
        />
        <PokemonCard pokemon={pokemonList[count]} />
      </div>
    </>
  );
}

export default App;
