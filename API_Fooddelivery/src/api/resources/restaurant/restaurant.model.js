import mongoose from 'mongoose';
import { number } from 'joi';
const Schema = mongoose.Schema;
const VendorSchema = new Schema({
     
name:{
    type:String,
    required :true
},
regId:{

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
type:{
    type:String,  
},
opentime:{
    type:time
},
closetime:{
    type:time
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