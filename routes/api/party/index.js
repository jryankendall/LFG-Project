const router = require("express").Router();
const db = require("../../../controllers/party");

router.post("/new", async (req, res) => {
    db.post.new(req, res);
})

module.exports = router;