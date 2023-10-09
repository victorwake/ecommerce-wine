
const { Router } = require('express');
const router = Router();
const { getDbWines, getColorType } = require('../../controllers/wine/wineJsonControllers')


router.get('/wines', getDbWines);
router.get('/type', getColorType)


module.exports = router;