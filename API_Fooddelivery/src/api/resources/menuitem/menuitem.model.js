import mongoose from 'mongoose';
import { number } from 'joi';
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
     
name:{
    type:String,
    required :true
},
CategoryId:{
    ref:'Category',
    type:Schema.Types.ObjectId,
    required:true
},
restroId:{
    ref:'vendor',
    type:Schema.Types.ObjectId,
    required:true
},
price:{
    type:Number
},
rating:{
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
},{collection : 'MenuItems'});
export default new mongoose.model('Menu',ItemSchema);