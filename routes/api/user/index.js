const router = require("express").Router();
const db = require("../../../controllers/user");


// API path: api/user/_____
router.post("/register", async (req, res) => {
    db.create.one(req, res);
})

router.route("/login");

router.route("/dev/test/")
    .get(async (req, res) => {
        console.log(req.query);
        
        db.get.one.byName(req, res);
    })

module.exports = router;