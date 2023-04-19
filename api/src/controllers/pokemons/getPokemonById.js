const axios = require("axios");

const getPokemonById = async (req, res) => {
  let { id } = req.params;

  try {
    const responsePokeId = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
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
    };
    res.status(200).json(objPoke);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getPokemonById };
