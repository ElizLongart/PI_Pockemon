import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'

export default function LandingPage(){
    return(
        <div className='container'>
                <h1 className='welcome'>Welcome to Pokemon World</h1>            
            <Link  to="/home" id="button">
			    <button id="start" className='start'>Start</button>
		    </Link>
        </div> 
    )
}