const router = require("express").Router();
const userRoutes = require("./user");
const partyRoutes = require("./party");

// Book routes
router.use("/user", userRoutes);

router.use("/party", partyRoutes);

module.exports = router;
