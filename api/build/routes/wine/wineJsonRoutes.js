"use strict";

var _wineJsonControllers = require("../../controllers/wine/wineJsonControllers");
const {
  Router
} = require('express');
const router = Router();
router.get('/wines', _wineJsonControllers.getDbWines);
router.get('/type', _wineJsonControllers.getColorType);
module.exports = router;