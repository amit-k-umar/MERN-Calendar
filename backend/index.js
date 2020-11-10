const express= require('express');
const mongoose= require('mongoose');
const authRoutes=require('./routes/authRoutes');
const cookieParser=require('cookie-parser')
const {requireAuth}=require('./middleware/authMiddleware')
require('dotenv').config()
const app=express();


//middleware
app.use(express.json());
app.use(cookieParser());


//database conection
//const dbURI = 'mongodb+srv://wom:amit@123@merncalender.tpijb.mongodb.net/calender?retryWrites=true&w=majority';
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {app.listen(5000); })
 
  .catch((err) => console.log(err));
  


console.log('kjkkk');

app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.send('ho gaya conect');
})
app.get('/login',(req,res)=>{
  res.send('you are redirected as you are not authenticated')
})
app.get('/user',requireAuth,(req,res)=>{
  res.send('you are acessing this becaluse you are authorised');
})
app.use(authRoutes);



