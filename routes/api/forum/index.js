const router = require("express").Router();
const db = require("../../../controllers/forum");

router.route("/threads")
    .get( async (req, res) => {
        db.get.bySubforum(req, res);
    } )

router.route("/seedthreads")
    .post( async (req, res) => {
        db.post.new(req, res);
    })

module.exports = router;