const router = Router();
import { Router } from 'express';
import { createWine, deleteWineById, updateWineById, getWines, getWineById, getColorType } from '../../controllers/wine/wineControllers';


router.get('/wines/get', getWines)
router.get('/wines/type', getColorType)
router.get('/wine/:wineId', getWineById)
router.post('/wine/create', createWine)
router.delete('/wine/delete/:wineId', deleteWineById)
router.put('/wine/update/:wineId', updateWineById)



module.exports = router;