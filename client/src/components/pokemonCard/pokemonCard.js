import React from "react";

import './pokemonCard.css'

export default function PokemonCard({name, image, types, id}) {
	let cap = name[0].toUpperCase();
	let namePok = name.split('');
	namePok.splice(0,1,cap).join('');
	return(
			<div>
					<div className="card">
						<img src={image} alt={name} className='pokemonImg'/>
						<div className="cardGradient">
							<p className="pokemonName">{namePok}</p>
							<div className="typesCard">
								{types?.map(type=><p key={types.indexOf(type)} id={type.name}>{type.name}</p>)}
							</div>
						</div>
					</div>
			</div>
	)
}

