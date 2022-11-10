const { Pokemon, Type } = require('../db');
const axios = require('axios');

let db = 40;
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
				attack: p.data.stats[1]['base_stat']
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

/* async function addPokemon(req, res) {
	const { hp, attack, defense, speed, height, weight, image, type1, type2 } =
	  req.body;
	let name = req.body.name.toLowerCase();
	let pokemon = {
	  id: ++db,
	  name,
	  hp,
	  attack,
	  defense,
	  speed,
	  height,
	  weight,
	  image,
	};
	try {
	  let createdPokemon = await Pokemon.create(pokemon);
	  const addType1 = await createdPokemon.addType(type1, {
		through: "pokemon_type",
	  });
	  const addType2 = await createdPokemon.addType(type2, {
		through: "pokemon_type",
	  });
	  return res.status(200).send("Sucesfully Created Pokemon");
	} catch (error) {
	  return error;
	}
  } */

module.exports = {
	getAllPokemons,
	//addPokemon
};