const { Router } = require('express');
const Event = require('../models/eventModel');
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose= require('mongoose');
const {requireAuth}=require('../middleware/authMiddleware');
const router=Router();

router.post('/createEvent',requireAuth, async (req,res)=>{
    const {start,end,title,description,bgColor}=req.body;
    const userData=req.user;
    try{
        const {start,end,title,description,bgColor}=req.body;
        const event= await Event.create({start,end,title,description,bgColor,resourceId:userData});
        console.log(event);
        res.status(201).json(event)
        
    }catch(err){
        console.log(err.message);
        res.status(400).json({err})
    }

});

router.get('/myEvents',requireAuth,async (req,res)=>{
    const u=req.user;
    const _id=u._id
    // res.json({_id})
    await Event.find({resourceId:new ObjectId(_id)},function (err,evt){
        if(err)
          { return res.status(400).json({err})
        
        }
        console.log(evt);
        return res.json(evt);

    });

})


module.exports=router;