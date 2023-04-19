const axios = require("axios");
const { Type } = require("../../db");

const getTypes = async (req, res) => {
  try {
    const dbTypes = await Type.findAll();
    if (!dbTypes.length) {
      const responseTypes = await axios.get("https://pokeapi.co/api/v2/type");
      const findType = responseTypes.data.results.map((e) => ({
        name: e.name,
      }));
      const newType = await Type.bulkCreate(findType);
      res.status(200).json(newType);
    } else {
      return res.status(201).json(dbTypes);
    }
  } catch (error) {
    res.status(500).json({ message: error + " no se encontraron los tipos" });
  }
};
module.exports = { getTypes };
