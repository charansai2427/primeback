const {TvShows} = require("../mongoConfig");
const TvShowsModel = require("../model/tvShowModel")

const addTvShows = ( req) =>{
    return TvShows.insertOne(req.body);
}

const getTvShows =(req) =>{
    return TvShows.findOne(req.body.userId);
}

const getAllTvShows  = (req) =>{
    return TvShows.find({}).toArray();
}

module.exports = {addTvShows,getAllTvShows,getTvShows}