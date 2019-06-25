require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema({ 
    title: { type: String, required: true, index: true },
    author: { type: String, required: true },
    posted: { type: Date, required: true, default: Date.now() },
    expires: { type: Date, required: true },
    details: {
        body: { type: String, required: true },
        goals: {
            goalType: String,
            title: String,
            source: String
        },
        members: { 
            min: { type: Number, required: true, default: 1 },
            max: { type: Number, required: false },
            wanted: { type: Number, default: 1 },
            list: { type: Array, required: true }
        },
        time: {
            start: { type: Date, required: true, default: Date.now() },
            end: { type: Date, required: true }
        }
    }
});

const Party = mongoose.model("Party", PartySchema, "parties");

module.exports = Party;