require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({ 
    title: { type: String, required: true, index: true, default: "No Title" },
    author: { type: String, required: true, default: "Anon" },
    posted: { type: Date, required: true, default: Date.now },
    category: {type: String, required: true, default: "other"},
    details: {
        body: { type: String, required: true, default: "Body Here" },
        goals: {
            goalType: String,
            title: String,
            source: String
        },
        members: { 
            needApproval: { type: Boolean, required: true, default: false },
            min: { type: Number, required: true, default: 1 },
            max: { type: Number, required: false, default: 3 },
            wanted: { type: Number, default: 1, default: 2 },
            list: { type: Array, required: true, default: [] }
        },
        time: {
            start: { type: Date, required: true, default: Date.now },
            end: { type: Date, required: true, default: Date.now }
        }
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '1m' },
    },
});

const Party = mongoose.model("Party", PartySchema, "parties");

module.exports = Party;