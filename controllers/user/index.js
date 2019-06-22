const db = require("../../models/user");
const jwt = require("jsonwebtoken");

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
                console.log("Calling byName");
                console.log(req.query.username);
                
                
                db.find({ username: req.query.username }, (err, result) => {
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
    login: (req, res, cb) => {
        const user = req.body;
        console.log(user);
        
        

        db.authenticate(user.username, user.password, (err, matchedUser) => {
            if (err) {
                console.log(err);
                return res.status(401).send("Username or password incorrect.");
            };
            // Issue token
            const secret = process.env.EXPRESS_SECRET;
            const payload = { username: matchedUser.username };
            const token = jwt.sign(payload, secret, {
                expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
        });
        
        /* db.find({ username: user.username }, (err, response) => {
            if (response.length != 1) {
                return res.status(404).send("User Not Found");
            }
            if (err) {
                return res.status(422).json(err);
            }
            else {
                response[0].checkPass(user.password, (err, result) => {
                    if (err) console.log(err);
                    
                    console.log(result);
                    
                })
            }
            
        }); */
    },
    create: {
        one: (req, res) => {
            let newUser = req.body.data;
            console.log(newUser);
            
            
            db.create(newUser)
                .then( () => {
                    res.status(200);
                })
                .catch(err => {
                    console.log(err);
                    
                    res.status(422).json(err);
                })
        }
    },
    delete: {
        all: (req, res) => {
            db.deleteMany({}, err => {
                console.log(err);
            })
            .then(() => {
                res.status(200);
                console.log("Dropped DB");
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
        }
    }
}