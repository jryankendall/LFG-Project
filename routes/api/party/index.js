const router = require("express").Router();
const db = require("../../../controllers/party");

router.post("/new", async (req, res) => {
    db.post.new(req, res);
})

router.route("/search", async (req, res) => {
    db.get.byCategory(req, res);
})

module.exports = router;