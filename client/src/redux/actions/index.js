import axios from 'axios';
import { ALPHABETICAL_ORDER, FILTER_BY_STORAGE, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_NAME_POKEMONS, GET_TYPES, SORT_BY_ATTACK } from './actionsType';

export function getAllPokemons(){
    return async function(dispatch){   
        var json = await axios.get('http://localhost:3001/pokemons') //AQUI ES DONDE SUCEDE LA MAGÍA DE LA CONEXION ENTRE EL FRONT Y EL BACK 
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: json.data
        })
    } 
}

export function getTypes(dispatch) {
	return axios.get('/types')
	.then(response=> response.data)
	.then(data=> 
        dispatch({
            type: GET_TYPES, 
            payload: data
        }))
};

export function filterByType(pokemonType){
    return{
        type: FILTER_BY_TYPE,
        payload: pokemonType
    }
}

export function filterByStorage(payload){
    return {
        type: FILTER_BY_STORAGE,
        payload
    }
}

export function alphabeticalOrder(order){
    return{
        type: ALPHABETICAL_ORDER,
        payload: order,
    }
}

export function sortByAttack(order){
    return {
        type: SORT_BY_ATTACK,
        payload: order
    }
}

export function getNamePokemons(name){
    return async function(dispatch){  
        try {
        var json = await axios.get('http://localhost:3001/pokemons?name=' + name); //AQUI ES DONDE SUCEDE LA MAGÍA DE LA CONEXION ENTRE EL FRONT Y EL BACK 
        return dispatch({
            type: GET_NAME_POKEMONS,
            payload: json.data
        })
    } catch(error){
        console.log(error)
    }
    }
}
