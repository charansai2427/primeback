const { Router} = require ("express");

const {addTvShows,getAllTvShows,getTvShows} = require("../controllers/tvShowsController");

const tvShowsRouter = Router();

tvShowsRouter.post("/tvshows",async ( req,res) =>{
    try {
        const data = await addTvShows(req);
        res.send(data);
    } catch (error) {
        res.send({err:error.message});
    }
});
tvShowsRouter.get("/get/:tvId", async (req, res) => {
    try {
      const data = await getTvShows(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

tvShowsRouter.get("/tvshows/all",async ( req,res) =>{
    try {
        const data = await getAllTvShows(req);
        res.send(data);
    } catch (error) {
        res.send({err:error.message});
    }
});

module.exports = tvShowsRouter;