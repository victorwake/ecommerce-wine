"use strict";

const {
  Router
} = require('express');
const router = Router();
const {
  getDbExp
} = require('../../controllers/experience/experienceControlers');
router.get('/experience', getDbExp);
module.exports = router;