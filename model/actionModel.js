const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
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
    time:{
        type:String,
        required:true,
    },
    release:{
        type:String,
        required:true,
    },
    genres:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("Action",actionSchema);
