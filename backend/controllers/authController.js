const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
require('dotenv').config()


//handel errors
const handelError=(err)=>{
  let error={email:'',password:''}
  console.log(err.message,err.code);

   // incorrect email
  if (err.message === 'Not a valid user') {
    errors.email = 'That email is not registered';
   }

  // incorrect password
  if (err.message === 'Wrong password') {
    errors.password = 'That password is incorrect';
  }

  if(err.code===11000){
    error.email='You already have a account with this email'
    return error;
  }
  if(err.message.includes('user validation failed')){
     console.log(Object.values(err.errors));
     Object.values(err.errors).forEach(({properties})=>{
       error[properties.path]=properties.message;
     })
  }
  return error;
}



//create token
const maxAge=2*24*60*60;

const signToken=(id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn:maxAge
  })
}



module.exports.signup = async(req, res) => {

  const {email,password}=req.body;

  try{
    const user= await User.create({email,password});
    console.log(user._id)
    const token=await signToken(user._id)
    res.cookie('jwtCAL', token, {httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).send('sing up compleated');
  }catch(err){
    const error= handelError(err);
    console.log(err.message);
    res.status(400).json({error})
  }
    // res.json({email,password})
  }

module.exports.login= async (req,res)=>{
    // res.json({'user':'loged in '})
    const {email,password}=req.body;
    try{
       const user=await User.login(email,password);
       const token=await signToken(user._id)
       res.cookie('jwtCAL', token, { httpOnly: true, maxAge: maxAge * 1000 });

       res.status(201).send('loged in...')
    }catch(err){
      const error=handelError(err);
      console.log(err.message);
      res.status(400).json({error});
    }
}

