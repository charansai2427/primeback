const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:String,
        required:true,
    },
    genres:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("TvShows",showSchema);