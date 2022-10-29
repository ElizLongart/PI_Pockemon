import React from "react";

export default function PokemonCard({name, image, types}){
    return (
        <div>
			<img src={image} alt="Pokemon not found" widht='200px' heigth='250px'/>
            <h3>{name}</h3>
            <h3>{types}</h3>
        </div>
    )
}