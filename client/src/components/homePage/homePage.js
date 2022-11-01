import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPokemons } from '../../redux/actions';
import PokemonCard from '../pokemonCard/pokemonCard';
import Paginado from '../paginado/paginado';
import './homePage.css';


export default function HomePage(){
    const dispatch = useDispatch();

    const allPokemons = useSelector(state => state.pokemons) 
    
    const [currentPage, setCurrentPage] = useState(1)  //Mi página actua que arranca en 1
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12) //
    const indexLastPokemonPerPage = currentPage * pokemonsPerPage  //El índice de mi último personaje. En un principio es 12
    const indexFirstPokemonPerPage = indexLastPokemonPerPage - pokemonsPerPage  //El índice del primer personaje. Será igual a 0 en la primera
    const currentPokemons = allPokemons.slice(indexFirstPokemonPerPage, indexLastPokemonPerPage) //Me devuelve un arreglo que tomará desde el primer índice hasta el último índice

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    };


    useEffect(()=> {
        dispatch(getAllPokemons())                //es parecido a usar mapDispatchToProps()
    }, [dispatch]);                                        

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
        <div className='create'>
            <Link to= '/pokemons'>Create Pokemon</Link>
        </div>
        </div>
        <div className='allPokemons'>
        {
        (allPokemons.length) ? 
            (currentPokemons.map((p) => {
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
        </div>   
        <Paginado
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginado={paginado}/>   
    </div> 
)

}