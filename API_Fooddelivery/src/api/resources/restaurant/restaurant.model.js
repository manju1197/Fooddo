import mongoose from 'mongoose';
import { number } from 'joi';
import User from '../user/user.model';
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
     
name:{
    type:String,
    required :true
},
regId:{
    ref:'User',
        type:Schema.Types.ObjectId,
        required:true
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
regId:{
    ref:'User',
    type:Schema.Types.ObjectId,
    required:true
},
type:{
    type:String,  
},
opentime:{
    type:Date
},
closetime:{
    type:Date
},
status:{
    type:String
},
created_dt:{
    type:Date,
    default:Date.now
},
isActive:{
    type:Boolean,
    default:true
}
},{collection : 'restaurants'});
export default new mongoose.model('vendor',VendorSchema);