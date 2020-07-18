import mongoose from 'mongoose';
import { number } from 'joi';
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
     
name:{
    type:String,
    required :true
},
UserId:{
    ref:'User',
    type:Schema.Types.ObjectId,
    required:true
},

CalculatedAmt:{
    type:Number
},
FinalAmt:{
    type:Number
},
discount:{
    type:Number
},
created_dt:{
    type:Date,
    default:Date.now
},
isActive:{
    type:Boolean,
    default:true
}
},{collection : 'Order'});
export default new mongoose.model('Order',OrderSchema);