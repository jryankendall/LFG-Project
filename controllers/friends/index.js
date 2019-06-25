const db = require("../../models/friends");

module.exports = {
    get: {
        byUser: function(username, condition, callback) {
            db.find({ [condition]: username }, (err, document) => {
                callback(err, document);
            })
        },
        byUser1: (req, res) => {
            this.get.byUser(req.body.username, "user1", function(err, document) {
                this.sendResponse(err, res, document);
            });
        },
        byUser2: (username) => {
            this.get.byUser(username, "user2", function(err, document) {
                this.sendResponse(err, res, document);
            });
        },
        byBoth: function(req, res) {
            db.find( {"user1": req.body.user1, "user2": req.body.user2}, (err, documents) => {
                this.sendResponse(err, res, documents);
            })
        }
    },
    sendResponse: function(err, res, document) {
        if (err) console.log(err);
        else {
            res.status(200)
                .json(document);
        }
    }
}