import React from "react";
import './paginado.css';


export default function Paginado ({pokemonsPerPage, allPokemons, paginado }){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) { //devuelve el entero mayor o igual más próximo al número
       pageNumbers.push(i)        
    }

    return (
        <nav>
                { pageNumbers.map(number =>(
                    <button onClick={()=>paginado(number)} key={number} className="pageNumber">{number}</button>
                ))}
        </nav>
    )
}