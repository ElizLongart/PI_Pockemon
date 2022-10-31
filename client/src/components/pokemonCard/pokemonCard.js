import React from "react";

export default function PokemonCard({name, image, type}){
    return (
        <div>
			<img src={image} alt="Pokemon not found" widht='200px' heigth='250px'/>
            <h3>{name}</h3>
            <h3>{type}</h3>
        </div>
    )
}