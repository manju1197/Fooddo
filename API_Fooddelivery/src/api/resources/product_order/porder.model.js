import mongoose from 'mongoose';
import { number } from 'joi';
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
     
name:{
    type:String,
    required :true
},
OrderId:{
    ref:'Order',
    type:Schema.Types.ObjectId,
    required:true
},
ProductId:{
    ref:'MenuItem',
    type:Schema.Types.ObjectId,
    required:true
},
Quantity:{
    type:Number
},
Total:{
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