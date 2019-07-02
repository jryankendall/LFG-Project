require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema( {
    author: { type: String, required: true },
    title: { type: String, required: true, default: "Reply"},
    posted: { type: Date, expires: '120m', required: true, default: Date.now },
    subForum: { type: String, required: true, default: "general" },
    body: { type: String, required: true, default: "Line" },
    properties: {
        reply: {
            isReply: { type: Boolean, required: true, default: false },
            replyTo: { type: String, required: false, default: 0 },
            repliesNum: { type: Number, required: true, default: 0 },
            replies: { type: Array, default: [] }
        }
    }
});

const Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;