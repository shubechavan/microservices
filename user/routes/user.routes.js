const express = require('express');
const router = express.Router(); 
const usercontroller = require('../controllers/user.controller');
const authMiddleware = require('../../middleware/authMiddleware');


router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.post('/logout', usercontroller.logout);
router.post('/profile',authMiddleware.userAuth, usercontroller.profile);


module.exports = router;
