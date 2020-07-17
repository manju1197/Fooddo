import mongoose from 'mongoose';
import { number } from 'joi';
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
     
name:{
    type:String,
    required :true
},
// createdBy:{
//     ref:'vendor',
//     type:Schema.Types.ObjectId,
//     required:true
// },
created_dt:{
    type:Date,
    default:Date.now
},
isActive:{
    type:Boolean,
    default:true
}
},{collection : 'Category'});
export default new mongoose.model('Category',CategorySchema);