const db = require("../../models/forum");

module.exports = {
    get: {
        bySubforum: (req, res) => {
            console.log(req.query);
            
            
            db.find( req.query, (err, documents) => {
                if (err) {
                    console.log(err)
                    return res.status(422).json(err);
                };
                if (!err) {
                    res.status(200).json(documents);
                }
            })
        },
        onePost: (req, res) => {
            console.log(req.query);
            
            db.findOne( req.query, (err, documents) => {
                if (err) {
                    console.log(err);
                    return res.status(422).json(err);
                }
                if (!err) {
                    res.status(200).json(documents);
                }
            })
        },
        replies: (req, res) => {
            console.log(req.query);
            
            db.find(req.query, (err, documents) => {
                if (err) {
                    console.log(err);
                    return res.status(422).json(err);
                }
                if (!err) {
                    res.status(200).json(documents);
                }
            } )
        }
    },
    post: {
        new: (req, res) => {
            console.log(req);
            
            db.create( req.body.data, (err, docs) => {
                if (err) {
                    console.log(err);
                    res.status(422).json(err);
                }

                console.log(docs);
                if (!err) {
                    console.log(res);
                    res.status(200).json(docs);
                }
            })
        }
    }
}