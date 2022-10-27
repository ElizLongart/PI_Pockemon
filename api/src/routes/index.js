const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

const getApiInfo = async () => {

	const pokemonsData = [];
	const firstApi = await axios.get('https://pokeapi.co/api/v2/pokemon');
	const partTwo = await axios.get(firstApi.data.next);
	const urlFirstsPoke = firstApi.data.results.map(async(pokemon)=> await axios.get(pokemon.url));
	const urlSecondsPoke = partTwo.data.results.map(async(pokemon)=> await axios.get(pokemon.url));
	const urlAll = urlFirstsPoke.concat(urlSecondsPoke);

	const pokeData = Promise.all(urlAll)
		.then(poke=> {poke.map(p=>{
			pokemonsData.push({
				id: p.data.id,
				name: p.data.name,
				image: p.data.sprites.other.home.front_default,
				types: p.data.types.map((type)=>{ return {'name': type.type.name}}),
				attack: p.data.stats[1]['base_stat']
			})
		})
		return pokemonsData;
	})
	return pokeData;

/* 	const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
	const apiInfo = await apiUrl.data.map(el  =>{
		return {
			ID: el.data.id,
			name: el.data.name,
			image: el.data.sprites.other.home.front_default,
			types: el.data.types.map((type)=>{ return {'name': type.type.name}}),
			attack: el.data.stats[1]['base_stat']
		};
	});
	return apiInfo; */
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



router.get('/pokemons', async (req, res) => {
	const name  = req.query.name
	
 	try {
		let allPokemones = await getAllPokemons();
		if (name) {
		const pokemon = allPokemones.filter((pokemon)=> pokemon.name.toLowerCase() === name.toLowerCase())
				if (pokemon[0]) return res.json(pokemon);
				//acá buscar en la api por nombre
				return res.status(404).send("Upps!! We can't find your pokemon")
	} else {			
			res.json(allPokemones);
		}
		} catch(e) {
			res.status(400).send(e);		
		} 
});


module.exports = router;
