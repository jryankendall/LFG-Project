const db = require("../../models/forum");

module.exports = {
    get: {
        bySubforum: (req, res) => {
            
            
            db.find( req.query, null, { sort: { 'properties.reply.replies[0].posted': -1 } }, (err, documents) => {
                if (err) {
                    console.log(err)
                    return res.status(422).json(err);
                };
                if (!err) {
                    res.status(200).json(documents);
                }
            })
        },
        onePost: (req, res) => {;
            
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
            db.create( req.body.data, (err, docs) => {
                if (err) {
                    console.log(err);
                    res.status(422).json(err);
                }

                console.log(docs);
                if (!err) {
                    res.status(200).json(docs);
                }
            })
        }
    },
    update: {
        one: (req, res) => {
            console.log(req.body.params);
            console.log(req.body.data);
            
            
            
            db.updateOne( req.body.params, req.body.data, (err, docs) => {
                if (err) {
                    console.log(err);
                    res.status(422).json(err);
                }

                console.log(docs);
                if (!err) {
                    res.status(200).json(docs);
                }
                
            } )
        }
    }
}