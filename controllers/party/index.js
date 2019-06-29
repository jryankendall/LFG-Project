const db = require("../../models/party");

module.exports = {
    get: {
        all: (req, res) => {
            db.find({}, (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(422).json(err);
                };
                if (!err) {
                    res.status(200).json(result);
                }
            })
        },
        one: {

        },
        byCategory: (req, res) => {
            db.find(req.body.data, (err, document) => {
                if (err) {
                    console.log(err)
                    return res.status(422).json(err);
                };
                if (!err) {
                    res.status(200).json(document);
                }
            })
        }
    },
    post: {
        new: (req, res) => {
            let newParty = req.body.data;
            console.log(newParty);
            
            
            db.create(newParty)
                .then( ( doc) => {
                    res.status(200).json(doc);
                })
                .catch( err => {
                    console.log(err);
                    
                    res.status(422).json(err);
                })
        }
    }
}