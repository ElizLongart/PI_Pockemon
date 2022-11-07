import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { createPokemon, getTypes } from "../../redux/actions";
import './createPokemon.css';



export default function CreatePokemon(){
    const dispatch = useDispatch();
    const history = useHistory();  //Para que me devuelva al home luego de crear el personaje 

    const types = useSelector(state => state.types);
        
    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height:'',
        weight: '',
        image: '',
        type: [],
    })
    
    useEffect(()=>{
        dispatch(getTypes())
    }, []);
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    }

    function handleCheck(e){
        if(e.target.checked){ //¿está marcado el input?
            setInput({
                ...input,
                status: e.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(createPokemon(input))
        alert('Successfully Created Pokemon!!')
        setInput({          //lo seteo en cero nuevamente
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height:'',
            weight: '',
            image: '',
            type: [],
        })
        history.pushState('/home')
    }
    
    return (
        <div className="containerForm">
            <Link to= '/home'><button></button>Return</Link>
            <h1>Create your pokemon</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="form">
                    <label>Name</label>
                    <input 
                        type='text' 
                        value={input.name} 
                        name='name'
                        onChange={handleChange}
                    />
                    <label>HP</label> 
                    <input 
                        name="hp" 
                        id="inputHp" 
                        value={input.hp} 
                        type="number" 
                        min="1" 
                        max="120" 
                        placeholder="1 to 120"
                        onChange={handleChange}
                    />
                    <label>Attack</label>
                    <input 
                        type="number" 
                        id="inputAttack" 
                        name="attack" 
                        value={input.attack} 
                        min="1" 
                        max="190" 
                        placeholder="1 to 190"
                        onChange={handleChange}
                    />
                    <label>Defense</label>
                    <input 
                        type="number" 
                        id="inputDefense" 
                        name="defense" 
                        value={input.defense} 
                        min="5" 
                        max="230"  
                        placeholder="5 to 230"
                        onChange={handleChange}
                    />
                    <label>Speed</label>
                    <input 
                        type="number" 
                        id="inputSpeed" 
                        name="speed" 
                        value={input.speed} 
                        min="58" 
                        max="140" 
                        placeholder="58 to 140"
                        onChange={handleChange}
                    />
                    <label>Height</label>
                    <input 
                        type="number" 
                        id="inputHeight" 
                        name="height" 
                        value={input.height} 
                        min="1" 
                        max="20" 
                        placeholder="1 to 20"
                        onChange={handleChange}
                    />
                    <label>Weight</label>
                    <input 
                        type="number" 
                        id="inputWeight" 
                        name="weight" 
                        value={input.weight} 
                        min="1" 
                        max="100" 
                        placeholder="1 to 100"
                        onChange={handleChange}
                    />
                    <label>Image</label>
                    <input 
                        type="url" 
                        id="inputImage" 
                        name="image" 
                        value={input.image} 
                        placeholder="insert url"
                        onChange={handleChange}
                    />
                    <div>
                    <h4>Choose up to 2 Pokemon types</h4>
                    {
                        types.map((type, index)=>{
                            return(
                                <>
                                    <input 
                                        type="checkbox" 
                                        id={`type${index + 1}`} 
                                        name={type} 
                                        value={index+1} 
                                        className="checkInput"
                                        onChange={handleCheck}
                                    />
                                    <label 
                                    for={type} 
                                    id={`label${type}`}>
                                        {type}
                                    </label>
                                </>
                                    )
                            })
		            }
                    </div>
                <button>
                    Send
                </button>
                </div>
            </form>
        </div>

    )

}