import experience from "../../data/expDb.json";

const getDbExp = async (req, res, next) => {
    try {
      res.status(200).send(experience);
    } catch (err) {
      res.status(400).json({ msg: "No hay resultados" });
    }
  };

module.exports = { getDbExp };
