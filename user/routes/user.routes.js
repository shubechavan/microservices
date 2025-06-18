const express = require('express');
const router = express.Router(); 
const usercontroller = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.get('/logout', usercontroller.logout);
router.get('/profile',authMiddleware.userAuth, usercontroller.profile);


module.exports = router;
