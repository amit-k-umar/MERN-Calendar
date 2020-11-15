const mongoose=require('mongoose');
const {isEmail}=require('validator')
const {ObjectId} = mongoose.Schema.Types;
const bcrypt=require('bcrypt')
userSchima=mongoose.Schema({
    email:{
        type:String,
        required:[true,'Plese enter email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Plese enter a valide email']
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,'Password in required'],
        minlength:[6,'Length of password must be greater than 6']
    },
    group:[{
        type:ObjectId,
        ref:"Group"
    }]
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

userSchima.method.addGroup=async function(groupId,callback){
    var group = this.group;
    group.push(group);
    this.save(callback);
}
const User=mongoose.model('user',userSchima);

module.exports=User;
