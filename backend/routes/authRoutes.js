const { Router } = require('express');
const { models } = require('mongoose');
//const authController=require('../controllers/authController')
const authController = require('../controllers/authController');

const router=Router();

router.post('/signup',authController.signup);
router.post('/signin',authController.login);
 //router.post('/login', authController.login_post);

module.exports=router;