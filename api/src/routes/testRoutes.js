const { Router } = require('express');
const router = Router();
const { test } = require('../controllers/testControllers')


router.get('/test', test);


module.exports = router;