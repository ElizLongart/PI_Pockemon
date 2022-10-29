import { GET_ALL_POKEMONS } from "../actions/actionsType";


export const initialState={
    allPokemons: [],
    pokemons: [],
}

export default function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload, //mandame todo lo que te da get_all_pokemon
                allPokemons: action.payload
            }    
        default:
            return state;
    }
}