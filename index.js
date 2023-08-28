require("dotenv").config();
const Express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");

const movieDataRouter = require('./routes/movieListRouter');
const watchListRouter = require('./routes/watchListRouter');
const tvShowsRouter = require("./routes/tvShowsRouter");
const actionDataRouter = require("./routes/actionRouter");
const userRouter = require("./routes/userRouter");
const paymentRouter = require ("./routes/paymentRouter");

const Auth = require("./middlewares/Auth");

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Auth);

mongoose.connect(
  `mongodb+srv://Charan_sai:darling_242726@cluster0.tr74xjt.mongodb.net/amazonprime`,
  );

app.use("/users",userRouter); 

app.use("/movie",movieDataRouter);
app.use("/watchList",watchListRouter);
app.use("/shows",tvShowsRouter );
app.use("/actions",actionDataRouter);
app.use("/payment",paymentRouter);
app.listen(4000, () => console.log("server running at port 4000"));
