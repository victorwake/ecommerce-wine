const { Router } = require('express');
const router = Router();
const  test= require('./testRoutes');
const  Products= require('./productsRoutes.js');
const getWines = require('./wine/wineJsonRoutes')


router.use('/', test);
router.use('/', Products);
router.use('/', getWines);


module.exports = router;

