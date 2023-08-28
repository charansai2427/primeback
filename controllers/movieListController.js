const {Movies} =require("../mongoConfig");
const MovieModel = require("../model/movieListModel");

const addMovie =(req) =>{
    return Movies.insertOne(req.body);
}

const getMovie =(req) =>{
    return Movies.findOne(req.body.userId);
}

const getAllMovies = (req) =>{
    return Movies.find({}).toArray();
}

module.exports = {addMovie,getAllMovies,getMovie}
