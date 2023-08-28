const mongoose = require("mongoose");
const watchSchema = new mongoose.Schema({
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

 module.exports = mongoose.model("Watch",watchSchema)