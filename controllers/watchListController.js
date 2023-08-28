const {Watch} =require("../mongoConfig");
const WatchModel = require("../model/watchListModel");

const addWatchList =(req) =>{
    const watchId = req.params.watchId;
    return Watch.insertOne(req.body);
}

const getWatchList =(req) =>{
    return Watch.findOne(req.body.userId);
}
const getAllWatchList = (req) =>{
    return Watch.find({}).toArray();
}

module.exports = {addWatchList,getAllWatchList,getWatchList}
