const mongoose=require('mongoose');
const {isEmail}=require('validator')
const bcrypt=require('bcrypt')
userSchima=mongoose.Schema({
    email:{
        type:String,
        required:[true,'Plese enter email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Plese enter a valide email']

    },
    password:{
        type:String,
        required:[true,'Password in required'],
        minlength:[6,'Length of password must be greater than 6']
    }
});
userSchima.pre('save',async function (next){
    const salt= await bcrypt.genSalt();
    this.password= await bcrypt.hash(this.password,salt);
    next();
})

userSchima.statics.login=async function(email,password){
    const user=await this.findOne({email});
    if(!user)
    throw Error('Not a valid user')
    console.log(user);
    const auth= await bcrypt.compare(password,user.password);
    if(!auth)
    throw Error('Wrong password')
    return user
}
const User=mongoose.model('user',userSchima);

module.exports=User;
