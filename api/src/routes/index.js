import { Router } from 'express';
const router = Router();
import getWines from './wine/wineJsonRoutes';
import getExp from './experience/experienceRoutes';
import WineDb from './wine/winesRoutes';




router.use('/', getWines);
router.use('/', getExp);
router.use('/', WineDb)


module.exports = router;

