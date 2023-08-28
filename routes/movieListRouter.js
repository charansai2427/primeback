const {Router} = require("express");

const {addMovie,getAllMovies,getMovie} = require("../controllers/movieListController");

const movieDataRouter = Router();

movieDataRouter.post("/addmovie", async (req, res) => {
    try {
      const data = await addMovie(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

  movieDataRouter.get("/get/:movieId", async (req, res) => {
    try {
      const data = await getMovie(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

movieDataRouter.get("/moviesAll", async (req, res) => {
    try {
      const data = await getAllMovies(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

  module.exports = movieDataRouter;
