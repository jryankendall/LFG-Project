const router = require("express").Router();
const withAuth = require("../../middleware/withAuth");

/* router.get("/checkToken", function(req, res) {
    res.status(401).json("No Token Detected");
}) */

router.get("/checkToken", withAuth, function(req, res) {
    res.status(200)
        .json({ it: "Dare" })
})

module.exports = router;