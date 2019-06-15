const router = require("express").Router();
const userController = require("../../../controllers/user");

router.route("/register")
    .post(async (req, res) => {
        let user = req.body;
    })