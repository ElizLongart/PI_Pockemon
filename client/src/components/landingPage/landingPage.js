import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'

export default function LandingPage(){
    return(
        <div className='container'>
            <div className='content'>
            <div className='visible'>
                <p className='parrLanding'> Hello</p>
                <ul className='listLanding'>
                    <li>
                        Worl
                    </li>
                    <li>
                        Users
                    </li>
                    <li>
                        Pokemon Clan
                    </li>
                </ul>
            </div>
            </div>
                <h1 className='welcome'>Welcome to Pokemon World</h1>            
            <Link  to="/home" id="button">
			    <button id="start">Start</button>
		    </Link>
        </div> 
    )
}