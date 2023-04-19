const { Router } = require("express");
const { getPokemons } = require("../controllers/pokemons/getPokemons");
const { getPokemonById } = require("../controllers/pokemons/getPokemonById");
// const {
//   getPokemonByName,
// } = require("../controllers/pokemons/getPokemonByName");
const { createPokemon } = require("../controllers/pokemons/createPokemon");
const { getTypes } = require("../controllers/types/getTypes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemons);
router.get("/pokemon/:id", getPokemonById);
// router.get("/pokemons", getPokemonByName);
router.post("/pokemon", createPokemon);
router.get("/types", getTypes);

// {
//     "id" : 12122312,
//      "name": "mili",
//      "image":"https://img.asmedia.epimg.net/resizer/PalPgqplvleduDwEG824NYTyFhQ=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/OB6PETJSUNPA3CI3IZVFYJDHDI.jpg",
//      "stroke": 10,
//      "defense": 20,
//      "speed": 10,
//      "height": 92,
//      "weight": 20,
// }

module.exports = router;
