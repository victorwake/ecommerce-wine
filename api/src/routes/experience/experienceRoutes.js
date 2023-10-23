const router = Router();
import{ Router } from 'express';
import { getDbExp } from '../../controllers/experience/experienceControlers';


router.get('/experience', getDbExp);


module.exports = router;