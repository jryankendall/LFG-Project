require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var saltRounds = parseInt(process.env.SALT_WORK_FACTOR);

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true}
})

userSchema
    .pre("save", function(next) {
        if (!this.isModified('password')) {
            return next;
        };

        
        this.password = bcrypt.hashSync(this.password, saltRounds);
        next();
    })
    .methods.checkPass = function(plaintext, cb) {
        console.log("Checking Passwords");
        
        return cb(null, bcrypt.compareSync(plaintext, this.password));
    };

const User = mongoose.model("User", userSchema, "clients");

module.exports = User;