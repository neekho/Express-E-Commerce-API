const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');


router.post('/register', userController.registerUser);


router.get('/profile', userController.getProfile);


router.put('/make_administrator/:USER_ID', userController.makeAdmin);


// add to cart???????? 

module.exports = router;