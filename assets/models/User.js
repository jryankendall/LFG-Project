const mongoose = require("mongoose"),
    bcrypt = require("bcrypt"),
    orm = require("../config/orm"),
    SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, index: { unique: true} },
    password: { type: String, require: true }
});

const User = mongoose.model("User", UserSchema, "userCollection");

const userControl = {
    all: function(callback) {
        orm.findAll(User, result => {
            return callback(result);
        })
    },

    add: function(userObj, callback) {
        let newUser = {
            username: userObj.username,
            password: userObj.password
        };
        orm.addOne(User, newUser, result => {
            return callback(result);
        })
    },

    byUsername: function(username, callback) {
        orm.findOne(User, { name: username}, results => {
            return callback(results);
        })
    }
}

module.exports = userControl;