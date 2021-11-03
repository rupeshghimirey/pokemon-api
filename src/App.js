import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';
import PokemonAxiosUseEffect from './components/PokemonAxiosUseEffect';
function App() {
  return (
    <div className="container">
      {/* <Pokemon></Pokemon> */}
      {/* <PokemonAxios></PokemonAxios> */}
      <PokemonAxiosUseEffect></PokemonAxiosUseEffect>
    </div>
  );
}

export default App;
