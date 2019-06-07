require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/";

mongoose.connect(MONGODB_URI);