const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const eventSchima=mongoose.Schema({
   description:{
       type:String
   },
   start:{
       type:String,
       required:true
   },
   end:{
        type:String,
        required:true
   },
   resourceId:{
    type:ObjectId,
    ref:"User"
   },
   title: {
       type:String,
       required:true
   },
   bgColor:{
    type:String,
    default:'#5B84B1FF',
    required:true
   },
   resizable:{
       type:Boolean,
       default:false
   },
   movable:{
    type:Boolean,
    default:false
   },
});

const Event=mongoose.model('event',eventSchima);
module.exports=Event;