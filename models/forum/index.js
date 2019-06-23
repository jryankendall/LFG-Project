require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema( {
    author: { type: String, required: true },
    posted: { type: Date, required: true, default: Date.now() },
    body: { type: String, required: true, default: "Line" },
    expires: { type: Date, required: true },
    properties: {
        reply: {
            isReply: { type: Boolean, required: true, default: false },
            replyTo: { type: String, required: false, default: 0 },
            repliesNum: { type: Number, default: 0 },
            replies: { type: Array, default: [] }
        }
    }
});

const Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;