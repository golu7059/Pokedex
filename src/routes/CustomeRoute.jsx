
import {Routes,Route} from 'react-router-dom'
import Pokedex from '../Components/Pokedex/Pokedex';
import PokemonDetails from '../Components/PokemonDetails/PokemonDetails';

function CustomeRoutes() {
    return (
         <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokemonDetails/>}/>

         </Routes>
    )
}

export default CustomeRoutes;