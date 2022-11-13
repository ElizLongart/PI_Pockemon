const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getApiInfo = async () => {

	const pokemonsDataApi = [];
	const firstApi = await axios.get('https://pokeapi.co/api/v2/pokemon');
	const secondApi = await axios.get(firstApi.data.next);
	const urlFirstsPokemon = firstApi.data.results.map(async(pokemon)=> await axios.get(pokemon.url));
	const urlSecondsPokemon = secondApi.data.results.map(async(pokemon)=> await axios.get(pokemon.url));
	const urlAllPokemon = urlFirstsPokemon.concat(urlSecondsPokemon);

	const pokeDataApi = Promise.all(urlAllPokemon)
		.then(poke=> {poke.map(p=>{
			pokemonsDataApi.push({
				id: p.data.id,
				name: p.data.name,
				image: p.data.sprites.other.home.front_default,
				types: p.data.types.map((type)=>{ return {'name': type.type.name}}),
				attack: p.data.stats[1].base_stat,
				defense: p.data.stats[2].base_stat,
				speed: p.data.stats[4].base_stat,
				height: p.data.height,
				weight: p.data.weight,
				created: 'false',
			})
		})
		return pokemonsDataApi;
	})
	return pokeDataApi;

};

const getDbInfo = async () => {
	const pokemonDb = await Pokemon.findAll({
		include:{
			model: Type, //incluye el modelo Type y traiga todos los personajes.
			attributes: ['name'], // Del modelo Type, quiero que me traiga el nombre
			through: {
				attributes: [], //Mediante los atributos 
			}
		}
	});
	return pokemonDb;	
};

const getAllPokemons = async () => {
	const apiPokemon = await getApiInfo();
	const dbPokemon = await getDbInfo();
	const allPokemons = apiPokemon.concat(dbPokemon);
	return allPokemons
};

module.exports = {
	getAllPokemons,
	};