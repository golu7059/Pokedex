
import { Link } from 'react-router-dom';
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import PokemonList from './Components/PokemonList/PokemonList'
import CustomeRoutes from './routes/CustomeRoute';

function App() {

  return (
    <div className='outer-pokedex'>
     <h1 id="pokedex-heading">
      <Link to="/">POKEDEX</Link>
      </h1>
      <CustomeRoutes/>
    </div>
  )
}

export default App;
