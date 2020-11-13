const { Router } = require('express');
const { models } = require('mongoose');
const authController=require('../controllers/authController')
// const authController = require('../controllers/authController');

const authRouter=Router();

authRouter.post('/signup',authController.signup);
authRouter.post('/signin',authController.login);
 //router.post('/login', authController.login_post);

module.exports=authRouter;