import React from 'react';
import './filterByType.css';

export default function FilterByType({handleFilterType}) {
	const types = [
        'normal', 
        'fighting', 
        'flying', 
        'poison', 
        'ground', 
        'rock', 
        'bug', 
        'ghost', 
        'steel', 
        'fire', 
        'water', 
        'grass', 
        'electric', 
        'psychic', 
        'ice', 
        'dragon', 
        'dark', 
        'fairy', 
        'unknown', 
        'shadow'
    ]

	return(
		<>
		<br/>
        <div>
            <select onChange={e => handleFilterType(e)}>
                <option value="All">All types</option>
                    {
                        types.map( (type) => (
                            <option value={type} key={types.indexOf(type)}>{type}</option>
                        ))
                    }
            </select>
		</div>
		</>
		)
};