const router = require("express").Router();
const path = require("path");

router.route("/")
    .get((req, res) => {
        console.log(req);
        res.sendFile(path.join(__dirname, "../../client/public/index.html"))
    });

module.exports = router;