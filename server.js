require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const pino = require('express-pino-logger')();
const uuid = require("uuid/v4");
const session = require("express-session");;
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pino);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

//Middleware
//Cookie Parser
/* app.use(cookieParser(process.env.EXPRESS_SECRET));

app.use(session({
  name: "Newsesh",
  secret: process.env.EXPRESS_SECRET,
  resave: false,
  saveUninitialized: true,
  httpOnly: true
})) */


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie");
  res.header("Access-Control-Allow-Methods", "DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// API Route import
app.use(routes);

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/lfgDb" );

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  console.log(`Link: http://localhost:${PORT}`);
  
});
