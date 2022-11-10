import React from "react";

export default function PokemonCard({name, image, types}) {
	let cap = name[0].toUpperCase();
	let nameCap = name.split('');
	nameCap.splice(0,1,cap).join('');
	return(
	<div id="inlineB">
		<div id="pokemonCardContainer">
			<img src={image} alt="Pokemon not found" id="poke3D"/>
			<h3 id="pokeName">{nameCap}</h3>
			<div id="typesContainer">
				<span>Type: </span>
			{types?.map(type=><h5 key={types.indexOf(type)} id={type.name}>{type.name}</h5>)}
			</div>
		</div>
	</div>
		)
}