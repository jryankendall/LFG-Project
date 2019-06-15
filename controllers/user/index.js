const db = require("../../models").User;

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
            byName: (req, res) => {
                db.find({ username: req.body.username }, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(422).json(err);
                    };
                    if (!err) {
                        res.status(200).json(result);
                    }
                })
            }
        }
    },
    create: {
        one: (req, res) => {
            let newUser = req.body;
            
            db.create(newUser)
                .then( () => {
                    res.status(200);
                })
                .catch(err => {
                    res.status(422).json(err);
                })
        }
    }
}