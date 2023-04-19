const axios = require("axios");
const { Pokemon, Type } = require("../../db");

const getPokemonsTotals = async () => {
  const pokemonsBd = await Pokemon.findAll({
    include: {
      model: Type,
    },
  });

  const responsePokemons = await axios(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
  );

  const pokeUrl = responsePokemons.data.results;
  const arrayPoke = [];
  for (let i = 0; i < pokeUrl.length; i++) {
    let result = await axios.get(pokeUrl[i].url);
    let objtPoke = {
      id: result.data.id,
      name: result.data.name,
      image: result.data.sprites.other.dream_world.front_default,
      stroke: result.data.stats[1].base_stat,
      defense: result.data.stats[2].base_stat,
      speed: result.data.stats[5].base_stat,
      height: result.data.height,
      weight: result.data.weight,
      types: result.data.types.map((e) => ({ name: e.type.name })),
    };

    arrayPoke.push(objtPoke);
  }
  return arrayPoke.concat(pokemonsBd);
};

const getPokemons = async (req, res) => {
  // const { idUser } = req.query;
  let { name } = req.query;

  try {
    if (name) {
      const dbPoke = await Pokemon.findOne({ where: { name: name } });
      if (!dbPoke) {
        const responsePokeId = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const objPoke = {
          id: responsePokeId.data.id,
          name: responsePokeId.data.name,
          image: responsePokeId.data.sprites.other.dream_world.front_default,
          stroke: responsePokeId.data.stats[1].base_stat,
          defense: responsePokeId.data.stats[2].base_stat,
          speed: responsePokeId.data.stats[5].base_stat,
          height: responsePokeId.data.height,
          weight: responsePokeId.data.weight,
          types: responsePokeId.data.types.map((e) => ({ name: e.type.name })),
        };
        res.status(200).json([objPoke]);
      } else {
        res.status(200).json(dbPoke);
      }
    } else {
      let pokemonsTotales = await getPokemonsTotals();
      res.status(200).json(pokemonsTotales);
    }
  } catch (error) {
    res.status(500).json({ message: "No se encontraron pokemons" });
  }
};

module.exports = { getPokemons };
