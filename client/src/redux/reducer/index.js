import { FILTER_BY_STORAGE, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_TYPES } from "../actions/actionsType";


export const initialState={
    allPokemons: [],
    pokemons: [],
    types: [],
}

export default function rootReducer (state = initialState, action){
    switch (action.type) {
            case GET_ALL_POKEMONS:
                return {
                    ...state,
                    pokemons: action.payload, //mandame todo lo que te da get_all_pokemon
                    allPokemons: action.payload
                }
            case GET_TYPES:
                const pokemonTypes = action.payload.map((type)=> type.name);
                return {
                    ...state,
                    types: pokemonTypes
                }    

            case FILTER_BY_TYPE:
                const filteredByType = state.allPokemons.filter(pokemon=>{
                    for(let type of pokemon.types){
                        if (type.name === action.payload)
                        return true
                    }
                    return false;
                });
                return {
                    ...state,
                    pokemons: filteredByType
                }

            case FILTER_BY_STORAGE:
                const allPokemons2 = state.allPokemons
                const filteredByStorage = action.payload === 'New' ?
                    allPokemons2.filter(pokemon => pokemon.createdInDb) :
                    allPokemons2.filter(pokemon => !pokemon.createdInDb)
                    return {
                        ...state,
                        pokemons: action.payload === 'All' ? allPokemons2 : filteredByStorage
                    }
                    


                 



        default:
            return state;
    }
}