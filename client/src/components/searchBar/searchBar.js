import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";


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
    }

return (
    <div>
        <input
            type = 'text'
            placeholder="Search..."
            onChange= {(e) => handleInputChange(e)}
            id="searchInput"
        />
        <button 
        type='submit'
        onClick = {(e)=> handledSubmit(e)}
        id="searchButton"
        >
            Search
        </button>
    </div>


)

}