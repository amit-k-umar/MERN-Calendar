const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const mongoose= require('mongoose');

require('dotenv').config()



 const requireAuth=(req,res,next)=>{
    const token = req.cookies.jwtCAL;

    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({error:"Not Authorized"});
          
        } else {
          const {id} = decodedToken;
          await User.findById(id).then(userdata=>{
            userdata.password=undefined;
            req.user = userdata
            console.log(userdata);
            next()
        }).catch(e=>{res.status(401).json({error:"Not Authorized"});})
          console.log(decodedToken);
          
        }
      });
    } else {
      res.status(401).json({error:"Not Authorized"});
    }
}

module.exports= {requireAuth};