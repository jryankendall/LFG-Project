const router = require("express").Router();
const db = require("../../../controllers/forum");

router.route("/threads")
    .get( async (req, res) => {
        db.get.bySubforum(req, res);
    } )

router.route("/post")
    .get( async (req, res) => {
        db.get.onePost(req, res);
    })
    .post( async (req, res) => {
        db.post.new(req, res);
    })

router.route("/update")
    .post( async (req, res) => {
        db.update.one(req, res);
    })

router.route("/replies")
    .get( async (req, res) => {
        db.get.replies(req, res);
    })

router.route("/seedthreads")
    .post( async (req, res) => {
        db.post.new(req, res);
    })

module.exports = router;