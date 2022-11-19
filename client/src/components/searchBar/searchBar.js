import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";
import { BiSearch } from "react-icons/bi";

import './searchBar.css'


export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        setName(e.target.value)
        console.log(name)
    };

    function handledSubmit(e){
		e.preventDefault();
        dispatch(getNamePokemons(name));
        setCurrentPage(1);
        setName('')
        console.log(e)
    }

return (
    <div className='containerSearch'>
        <div className='search'>
        <input
            type = 'text'
            placeholder="Search Pokemons..."
            onChange= {(e) => handleInputChange(e)}
            id="searchInput"
        />
        <button 
        onClick = {(e)=> handledSubmit(e)}
        >
            <BiSearch />
        </button>
    </div>
    </div>

)

}