require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var saltRounds = parseInt(process.env.SALT_WORK_FACTOR);

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    username: {type: String, required: true, index: {unique: true}},
    avatar: { type: String },
    title: { type: String },
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false},
    bio: { type: String },
    timezone: { type: String },
    postCount: { type: Number, default: 0 }
})

userSchema
    .pre("save", function(next) {
        if (!this.isModified('password')) {
            return next;
        };

        
        this.password = bcrypt.hashSync(this.password, saltRounds);
        next();
});

userSchema.statics.authenticate = function(username, plainPassword, callback) {
    
    User.findOne({ username: username })
        .exec( (err, user) => {
            if (err) { return callback(err, null) }
            else if (!user) {
                let err = new Error("Username or password incorrect.");
                err.status = 401;
                return callback(err, null);
            }
            bcrypt.compare(plainPassword, user.password, (err, isMatch) => {
                if (err) console.log(err);
                if (isMatch) {
                    return callback(null, user);
                } else {
                    return callback("Username or password incorrect", null);
                }
            })
        })
};

userSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
}

const User = mongoose.model("User", userSchema, "clients");

module.exports = User;