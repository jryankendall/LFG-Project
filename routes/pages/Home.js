const router = require("express").Router();

router.route("/home")
    .get(async (req, res) => {
        
        res.json("F");
})

module.exports = router;