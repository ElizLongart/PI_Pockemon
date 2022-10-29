import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPokemons } from '../../redux/actions';
import PokemonCard from '../pokemonCard/pokemonCard';
import './homePage.css';


export default function HomePage(){
    const dispatch = useDispatch();

    const allPokemons = useSelector(state => state.pokemons) //es parecido a usar mapStateToProps() 


    useEffect(()=> {
        dispatch(getAllPokemons())                //es parecido a usar mapDispatchToProps()
    }, [dispatch]);                                        // lo dejo vacio porque no depende de nada para ejecutarse

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllPokemons());
    }

return (
    <div className='home'> 
        <h1>Pokemon</h1>
        <h3>"God helps the early riser, or in this case he gets his Pokémon!!"</h3>
        <p>Profesor Oak</p>
        <button onClick={e=> {handleClick(e)}}>
            Reload
        </button>  
        <div>
            <select>
                <option>Name</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select>
            <select>
                <option>Attack</option>
                <option value='Highest'>Highest</option>
                <option value='Lowest'>Lowest</option>
            </select>
            <div>
                <button>All</button>
                <button value='Existing'>Existing</button>
                <button value='New'>New</button>
            </div>
            <select>
                <option>Type</option>
                <span> ▼ </span>
                <option value='All'>All</option>
                <option value='Ice'>Ice</option>
                <option value='Fighting'>Fighting</option>
                <option value='Flying'>Flying</option>
                <option value='Poison'>Poison</option>
                <option value='Ground'>Ground</option>
                <option value='Rock'>Rock</option>
                <option value='Bug'>Bug</option>
                <option value='Normal'>Normal</option>
                <option value='Ghost'>Ghost</option>
                <option value='Steel'>Steel</option>
                <option value='Water'>Water</option>
                <option value='Fire'>Fire</option>
                <option value='Grass'>Grass</option>
                <option value='Electric'>Electric</option>
                <option value='Psychic'>Psychic</option>
                <option value='Dragon'>Dragon</option>
                <option value='Dark'>Dark</option>
                <option value='Fairy'>Fairy</option>
                <option value='Shadow'>Shadow</option>
                <option value='Unknown'>Unknown</option>
            </select>
        </div>  
        {
        (allPokemons.length) ? (allPokemons.map((p) => {
                    return(
                        <fragment>
                            <Link to={`/home/${p.id}`}>
                            <PokemonCard name={p.name} image={p.image} types={p.types} key={p.id}/>
                        	</Link>
                        </fragment>
                    );
                })) :
                <>
                     <img src="https://c.tenor.com/BINsHS7Uo-0AAAAi/temple-loader.gif" alt="Loading" />
                </>
            }    
        <Link to= '/pokemons'>Create Pokemon</Link>
    </div> 
)

}