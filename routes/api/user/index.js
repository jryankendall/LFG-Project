const router = require("express").Router();
const db = require("../../../controllers/user");


// API path: api/user/_____
router.post("/register", async (req, res) => {
    db.create.one(req, res);
})

router.route("/dev/testdrop/")
    .delete(async (req, res) => {
        db.delete.all(req, res);
});

module.exports = router;