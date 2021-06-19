//import mongoose,{Schema} from 'mongoose';

const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const clasificationSchema = new Schema({
    name:{
        type:String, 
        maxlength:50,
        required:true
    }
});

const clasification = mongoose.model('clasification',clasificationSchema);

export default clasification;