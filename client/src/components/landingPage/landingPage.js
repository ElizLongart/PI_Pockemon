import React from 'react';
import { Link } from 'react-router-dom';



export default function LandingPage(){
    return(
        <div>
            <div>
                <h2>{'Welcome to Pokemon World'}</h2>            
            </div>
            <div>
                <h2>{'Come and remember the best Pokemons'}</h2>            
            </div>
            <div> 
                <p>{'You can search them by name'}</p>
            </div>
            <div> 
                <p>{'Or find them by types of Pokemons'}</p>
            </div>
            <div> 
                <p>{'Sort them Alphabetically'}</p>
            </div> 
            <div> 
                <p>{'Or better yet...'}</p>
            </div> 
            <div>
                <h2>{'Create your Ideal Pokemon!!'}</h2>            
            </div>
            <Link  to="/home" id="button">
			    <button id="start">Start</button>
		    </Link>
        </div> 
    )
}