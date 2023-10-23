"use strict";

var _winesDb = _interopRequireDefault(require("../../data/winesDb.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getDbWines = async (req, res, next) => {
  try {
    const {
      name
    } = req.query;
    if (name) {
      let filteredWines;
      if (name === "winery") {
        filteredWines = _winesDb.default.filter(el => el.winery.toLowerCase().includes(name.toLowerCase()));
      } else {
        filteredWines = _winesDb.default.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
      }
      if (filteredWines.length > 0) {
        res.status(200).send(filteredWines);
      } else {
        res.status(400).json({
          msg: "No hay resultados para tu búsqueda"
        });
      }
    } else {
      res.status(200).send(_winesDb.default);
    }
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};

// ---------------------------------------------------------------------

const getColorType = async (req, res) => {
  let type = req.query.type;
  let wineTypeFind = _winesDb.default.filter(el => el.color_type.toLowerCase() === type.toLowerCase());
  if (wineTypeFind.length === 0) {
    return res.status(401).json({
      msg: `Acción no permitida, indica un color_type que corresponda`
    });
  } else {
    try {
      res.status(200).send(wineTypeFind);
      console.log(wineTypeFind);
    } catch (err) {
      res.status(400).json({
        error: err.message
      });
    }
  }
};
module.exports = {
  getDbWines,
  getColorType
};