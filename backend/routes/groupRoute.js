const { Router } = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose= require('mongoose');
const Group = require('../models/groupModel')
const {requireAuth}=require('../middleware/authMiddleware');
const groupRouter=Router();


groupRouter.post('/createGroup',requireAuth,async (req,res)=>{
    let {members}=req.body;
    console.log(members);
    const u=req.user;
    const _id=u._id

   members.push(_id.toString())
   console.log(members);
  
    const group=  await Group.create({members})
    await members.forEach(member => {
        console.log(member);
        
    });
    res.json({group});
});

module.exports=groupRouter;