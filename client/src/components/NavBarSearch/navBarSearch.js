import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from '../searchBar/searchBar.js';
import Pikachu from '../../assets/pikachu.png'

import './navBarSearch.css';

export default function NavBarSearch({setCurrentPage}) {
	return(
		<div className="navBarContainer">
			<Link to="/home">
				<img src={Pikachu} alt="pokemon" id="pokeLogo"/>
        	</Link>
			<NavLink to="/pokemons" className="navLink">Create Pokemon</NavLink>
            <SearchBar setCurrentPage={setCurrentPage}/>
		</div>
		)
}