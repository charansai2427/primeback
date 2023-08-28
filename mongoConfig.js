const { MongoClient } = require("mongodb");

const client = new MongoClient(
  `mongodb+srv://Charan_sai:darling_242726@cluster0.tr74xjt.mongodb.net/amazonprime`,

  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 3600000 },
  { keepAlive: 1 }
);

const db = client.db();

const Users = db.collection("Users");
const Movies = db.collection("Movies");
const Watch = db.collection("Watch");
const TvShows = db.collection("TvShows");
const Action = db.collection("Action");
 
module.exports = { Users,Movies,Watch,TvShows,Action};
