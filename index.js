const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

//MIDDLEWARES
app.use(bodyParser.json());
app.use(express.json());

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//ROUTE MIDDLEWARE
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

//connect to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("DB CONNECTED");
  }
);

//start the server
const PORT = 5000;
app.listen(PORT);
