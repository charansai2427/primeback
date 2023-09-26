const {Movies} =require("../mongoConfig");
const {ObjectId}= require("mongodb")

const addMovie =(req) =>{
    return Movies.insertOne(req.body);
}

const getMovie =(req) =>{
    const id = new ObjectId(req.params.movieId)
    console.log(id);
    return Movies.findOne({_id:req.params.movieId});
}

const getAllMovies = (req) =>{
    return Movies.find({}).toArray();
}

module.exports = {addMovie,getAllMovies,getMovie}
