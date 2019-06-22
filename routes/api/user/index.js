const router = require("express").Router();
const db = require("../../../controllers/user");


// API path: api/user/_____
router.post("/register", async (req, res) => {
    db.create.one(req, res);
})

router.route("/dev/testlogin/")
    .post(async (req, res) => {
        db.login(req, res, (user) => {
            console.log(user);
        });
});

router.route("/dev/test/")
    .get(async (req, res) => {
        console.log(req.query);
        
        db.get.one.byName(req, res);
});

router.route("/dev/testregister/")
    .post(async (req, res) => {
        console.log(req.body);
        
        db.create.one(req, res);
})

router.route("/dev/testdrop/")
    .delete(async (req, res) => {
        db.delete.all(req, res);
});

module.exports = router;