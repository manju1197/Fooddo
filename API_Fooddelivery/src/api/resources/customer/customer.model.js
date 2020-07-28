import mongoose from 'mongoose';
import { number } from 'joi';
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
     
firstname:{
    type:String,
    required :true
},
lastname:{
    type:String,
    required :true
},
userId:{
    ref:'User',
    type:Schema.Types.ObjectId,
    required:true 
},
dob:{
    type:Date
},
address:{
    type:String
},
city:{
    type:String
},
state:{
    type:String
},
pin:{
    type:Number
},
contact:{
    type:Number,
    required:true,
    unique:true
},
gender:{
    type:String
},
email:{
    type:String,
    required:true,
    unique:true
},
created_dt:{
    type:Date,
    default:Date.now
},
isActive:{
    type:String,
    // default:true
}
},{collection : 'Customer'});
export default new mongoose.model('client',ClientSchema);