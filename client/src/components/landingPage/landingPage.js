import React from 'react';
import { Link } from 'react-router-dom';
import Pikachu from '../../assets/pikachu.png'
import Logo from '../../assets/logo.png'

import './landing.css'

export default function LandingPage(){
    return(
        <div className='containerLanding'>
            <img src={Logo} alt="Pikachu" className='pikachu'/>
                <h1 className='welcome'>Welcome to</h1>
                <h1 className='pokemon'>Pokemon World</h1>                        
            <Link  to="/home">
			    <button id="start" className='start'>Start</button>
		    </Link>
            <img src={Pikachu} alt="Charizard" className='logoLanding'/>
        </div> 
    )
}