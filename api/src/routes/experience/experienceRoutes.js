const router = Router();
import{ Router } from 'express';
import { getJsonExp } from '../../controllers/experience/experienceJsonControlers';
import { getExperience, createExperience, updateExperience, deleteExperience } from '../../controllers/experience/experienceControllers'


router.get('/experiencejson', getJsonExp );
router.get('/experience', getExperience );
router.post('/experience/create', createExperience );
router.put('/experience/update', updateExperience );
router.delete('/experience/delete', deleteExperience );


module.exports = router;