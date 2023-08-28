const {Router} = require("express");

const {addWatchList,getWatchList,getAllWatchList} = require("../controllers/watchListController");

const watchListRouter = Router();

watchListRouter.post("/watchList", async (req, res) => {
    try {
      const data = await addWatchList(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

  watchListRouter.get("/get/:watchId", async (req, res) => {
    try {
      const data = await getWatchList(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });


  watchListRouter.get("/watchListAll", async (req, res) => {
    try {
      const data = await getAllWatchList(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

  module.exports = watchListRouter;
