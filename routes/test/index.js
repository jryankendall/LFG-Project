const router = require("express").Router();
const withAuth = require("../../middleware/withAuth");

router.route("/checkToken", function(req, res) {
    res.json("No Token Detected")
        .send("No token found.");
})

router.route("/checkToken", withAuth, function(req, res) {
    res.sendStatus(200)
        .send("Token detected.")
        .json("Token found.");
})

module.exports = router;