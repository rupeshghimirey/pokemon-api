import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';
function App() {
  return (
    <div className="container">
      {/* <Pokemon></Pokemon> */}
      <PokemonAxios></PokemonAxios>
    </div>
  );
}

export default App;
