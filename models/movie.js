import mongoose,{Schema} from 'mongoose';
const MovieSchema = new Schema({
    clasification: {type: Schema.ObjectId, ref:'clasification'},
    name: {
        type: String,
        maxlength:50,
        required:true
    },
    director:{
        type:String,
        maxlength:50,
        required:true
    },

});
const Movie = mongoose.model('movie', MovieSchema);
export default Movie;