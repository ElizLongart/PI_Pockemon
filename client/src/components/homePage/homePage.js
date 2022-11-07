import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { alphabeticalOrder, filterByStorage, filterByType, getAllPokemons, sortByAttack } from '../../redux/actions';
import PokemonCard from '../pokemonCard/pokemonCard';
import Paginado from '../paginado/paginado';
import './homePage.css';
import FilterByType from '../filterByType/filterByType';
import FilterByStorage from '../filterByStorage/filterByStorage';
import Sort from '../sort/sort';
import SearchBar from '../searchBar/searchBar.js';
import CreatePokemon from '../createPokemon/createPokemon';


export default function HomePage(){
    const dispatch = useDispatch();

    const allPokemons = useSelector(state => state.pokemons) 

    
    const [currentPage, setCurrentPage] = useState(1)  //Mi página actual que arranca en 1
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12) // 12 pokemones por página
    const indexLastPokemonPerPage = currentPage * pokemonsPerPage  //El índice de mi último personaje. En un principio es 12
    const indexFirstPokemonPerPage = indexLastPokemonPerPage - pokemonsPerPage  //El índice del primer personaje. Será igual a 0 en la primera
    const currentPokemons = allPokemons.slice(indexFirstPokemonPerPage, indexLastPokemonPerPage) //Me devuelve un arreglo que tomará desde el primer índice hasta el último índice
    const [order, setOrder] = useState(''); //Estado local para ordenar


    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    };

    useEffect(()=> {
        dispatch(getAllPokemons())                //es parecido a usar mapDispatchToProps()
    }, [dispatch]);                                        

    function handleClickAll(e){
        e.preventDefault();
        dispatch(getAllPokemons());
    }

    function handleFilterType(e){
        setCurrentPage(1);
        dispatch(filterByType(e.target.value))
    }

    function handleFilterByStorage(e){
        dispatch(filterByStorage(e.target.value))
    }

    function handleAlphabeticalOrder(e){
        e.preventDefault();
        dispatch(alphabeticalOrder(e.target.value))
        setCurrentPage(1);                  //Para setear en la página 1
        setOrder(`Sorting ${e.target.value}`)   //Es un estado local vacio y lo uso para que modifique el estado local y se renderice 
    }

    function handleSortByAttack(e){
        e.preventDefault();
        dispatch(sortByAttack(e.target.value))
        setCurrentPage(1);                  //Para setear en la página 1
        setOrder(`Sorting ${e.target.value}`)   //Es un estado local vacio y lo uso para que modifique el estado local y se renderice 
    }

return (
    <div className='home'> 
        <h1>Pokemon</h1>
        <h3>"God helps the early riser, or in this case he gets his Pokémon!!"</h3>
        <p>Profesor Oak</p>
        <SearchBar setCurrentPage={setCurrentPage}/>
        <div>
            <h3> Filter by</h3>
                <FilterByStorage handleFilterByStorage={handleFilterByStorage} handleClickAll={handleClickAll}/>
                <FilterByType handleFilterType={handleFilterType}/>
            <h3> Sort by</h3> 
                <Sort handleAlphabeticalOrder={handleAlphabeticalOrder} handleSortByAttack={handleSortByAttack} />
            <button onClick={e=> {handleClickAll(e)}}>
                Reload
            </button>            
        </div>
        <Link  to="/pokemons" id="buttonCreate">
			<button id="create">Create Pokemons</button>
		</Link>
        <div className='allPokemons'>
        {
        (allPokemons.length) ? 
            (currentPokemons.map((p) => {
                return(
                    <>
                        <Link to={`/home/${p.id}`}>
                            <PokemonCard name={p.name} image={p.image} types={p.types} key={p.id}/>
                        </Link>
                    </>
                );
            })) :
            <>
                <img src="https://i.pinimg.com/originals/f4/59/98/f459980b6a50cbfb897a7299ca86dab0.gif" alt="Loading" className='loading'/>
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