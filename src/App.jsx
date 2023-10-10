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
    name: "Mew",
  },
];
function App() {
  const [whichPokemon, setWhichPokemon] = useState(0);
  function majIndex(index) {
    setWhichPokemon(index);
  }
  return (
    <>
      <div className="affichagePokemon">
        <PokemonCard pokemon={pokemonList[whichPokemon]} />
      </div>
      <NavBar pokemonList={pokemonList} onSelection={majIndex} />
    </>
  );
}

export default App;
