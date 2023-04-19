const { Pokemon, Type } = require("../../db");

const createPokemon = async (req, res) => {
  try {
    let { name, image, stroke, defense, speed, height, weight, types } =
      req.body;

    let createdPoke = await Pokemon.create({
      name,
      image,
      stroke,
      defense,
      speed,
      height,
      weight,
    });
    let typesBd = await Type.findAll({ where: { name: types } });
    let newPoke = await createdPoke.addType(typesBd);
    res.status(200).json(newPoke);
  } catch (error) {
    res.status(500).json({ message: 'No existe' });
  }
};

module.exports = { createPokemon };
