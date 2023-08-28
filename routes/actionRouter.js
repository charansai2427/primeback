const {Router} = require("express");
const {addAction,getAllAction,getAction} =require ("../controllers/actionController")
const actionDataRouter = Router();

actionDataRouter.post("/action", async (req, res) => {
    try {
      const data = await addAction(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

  actionDataRouter.get("/get/:actionId", async (req, res) => {
    try {
      const data = await getAction(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

actionDataRouter.get("/action", async (req, res) => {
    try {
      const data = await getAllAction(req);
      res.send(data);
    } catch (error) {
      res.send({ err: error.message });
    }
  });

  module.exports = actionDataRouter;