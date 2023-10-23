"use strict";

var _express = require("express");
const router = (0, _express.Router)();
const test = require('./testRoutes');
const Products = require('./productsRoutes.js');
const getWines = require('./wine/wineJsonRoutes');
const getExp = require('./experience/experienceRoutes');
router.use('/', test);
router.use('/', Products);
router.use('/', getWines);
router.use('/', getExp);
module.exports = router;