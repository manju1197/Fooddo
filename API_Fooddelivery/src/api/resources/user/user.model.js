import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
     
name:{
    type:String,
    required :true
},

email:{
    type:String,
    required: true,
    unique:true
},
password:{
    type:String,
    required :true
    
},
contact:{
    type:Number,
    required:true,
    unique:true
},
role:{
    type:String,
   
},
created_dt:{
    type:Date,
    default:Date.now
},
isActive:{
    type:Boolean,
    default:true
}
},{collection : 'User'});
export default new mongoose.model('User',UserSchema);