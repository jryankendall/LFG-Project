const router = require("express").Router();
const path = require("path");

router.route("/home")
    .get(async (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/public/index.html"));
})

module.exports = router;