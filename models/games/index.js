const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Game = new Schema({
    name: { type: String, required: true, index: true }
})

module.exports = Game;