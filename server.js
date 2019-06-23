require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.set('trust proxy', 1);
}

//Middleware
//Cookie Parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// API Route import
app.use(routes);

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/lfgDb", { useNewUrlParser: true } );

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  console.log(`Link: http://localhost:${PORT}`);
  
});
