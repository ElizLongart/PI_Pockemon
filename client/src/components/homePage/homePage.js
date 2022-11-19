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
import NavBarSearch from '../NavBarSearch/navBarSearch.js';
import picachuSearch from '../../assets/pikachusearch.png'
import Logo from '../../assets/logo.png'
import Footer from '../footer/footer';



export default function HomePage(){
    const dispatch = useDispatch();

    const allPokemons = useSelector(state =>
         state.pokemons) 

    
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

 /* if(allPokemons.length){  */
    return (
        <div className='home'> 
            <NavBarSearch setCurrentPage={setCurrentPage}/>
            <div className='containerFilterSort'>
                <div className='containerFilterHome'>
                    <p> Filter by</p>
                    <FilterByStorage handleFilterByStorage={handleFilterByStorage} handleClickAll={handleClickAll}/>
                    <FilterByType handleFilterType={handleFilterType}/>
                </div>
                <div className='imgHome'> 
                <img src={Logo} alt="Pikachu" className='pikachuHome'/>
                <img src={picachuSearch} alt="Pikachu" className='pikachuSearch'/>
                <button className='reload' onClick={e=> {handleClickAll(e)}}>Reload</button>  
                </div>
                <div className='containerSortHome'>
                    <p> Sort by</p> 
                    <Sort handleAlphabeticalOrder={handleAlphabeticalOrder} handleSortByAttack={handleSortByAttack} />
                </div>      
            </div>

            <div className='allPokemons'>
            {
                currentPokemons.map((p) => {
                    return(
                        <>
                            <Link to={`/pokemons/${p.id}`}>
                                <PokemonCard name={p.name} image={p.image} types={p.types} key={p.id}/>
                            </Link>
                        </>
                    );
                }) 
            }
            </div>
             
            <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}/>   
            <Footer/>
        </div> 
    )/*}  else{
            return (
                <div className="loadingContainer">
					<img src="https://i.pinimg.com/originals/0c/4b/61/0c4b61db17a53de6ba0f4ffa3b842c2b.gif" alt="Loading" />
                    <h1>Loading... Please wait</h1>
                </div>
            ); 
    }  */
}