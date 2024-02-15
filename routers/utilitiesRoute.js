const express = require('express');

const router = express.Router();

const utilitiesController = require('../controllers/utilitiesController.js');


router.get('/routes', utilitiesController.routes);


module.exports = router;
