const router = require("express").Router();
const withAuth = require("../../middleware/withAuth");

router.route("/checkToken", function(req, res) {
    res.status(401).json("No Token Detected");
})

router.route("/checkToken", withAuth, function(req, res) {
    res.status(200)
        .json("Token found.");
})

module.exports = router;