import axios from 'axios';
import { GET_ALL_POKEMONS } from './actionsType';

export function getAllPokemons(){
    return async function(dispatch){   
        var json = await axios.get('http://localhost:3001/pokemons', { //AQUI ES DONDE SUCEDE LA MAGÍA DE LA CONEXION ENTRE EL FRONT Y EL BACK 

        });
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: json.data
        })
    } 
}
