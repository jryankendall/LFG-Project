const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendpairSchema = new Schema({
    user1: { type: String, index: true },
    user2: { type: String },
    friendStatus: { type: Number, required: true, default: 0 }
})

const FriendPair = mongoose.model("Friendpair", FriendpairSchema, "friends");

module.exports = FriendPair;