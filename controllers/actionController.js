const {Action}  = require("../mongoConfig");
const ActionModel = require("../model/actionModel");

const addAction= (req) =>{
    return Action.insertOne(req.body);
}

const getAction =(req) =>{
    return Action.findOne(req.body.userId);
}

const getAllAction = (req) =>{
    return Action.find({}).toArray();
}

module.exports = {addAction,getAllAction,getAction}