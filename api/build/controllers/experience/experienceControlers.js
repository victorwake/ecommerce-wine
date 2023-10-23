"use strict";

var _expDb = _interopRequireDefault(require("../../data/expDb.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getDbExp = async (req, res, next) => {
  try {
    res.status(200).send(_expDb.default);
  } catch (err) {
    res.status(400).json({
      msg: "No hay resultados"
    });
  }
};
module.exports = {
  getDbExp
};