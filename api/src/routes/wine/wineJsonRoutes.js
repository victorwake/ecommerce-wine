
const { Router } = require('express');
const router = Router();
const { getDbWines} = require('../../controllers/wine/wineJsonControllers')


router.get('/wines', getDbWines);


module.exports = router;