const router = Router();
import { Router } from 'express';
import { getDbWines, getColorType } from '../../controllers/wine/wineJsonControllers'


router.get('/wines', getDbWines);
router.get('/type', getColorType)


export default router;