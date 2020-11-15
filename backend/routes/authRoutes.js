const { Router } = require('express');
const { models } = require('mongoose');
const authController=require('../controllers/authController')
// const authController = require('../controllers/authController');

const authRouter=Router();

authRouter.post('/signup',authController.signup);
authRouter.post('/signin',authController.login);
authRouter.get('/logout',(req, res) => {
    res.cookie('jwtCAL', '', { maxAge: 1 });
    res.send()})
 //router.post('/login', authController.login_post);

module.exports=authRouter;