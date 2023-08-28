const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   title:{
        type:String,
        required:true,
    },
    poster_path:{
        type:String,
        required:true,
    },
})

 module.exports = mongoose.model("Movies",movieSchema)