const router = require("express").Router();
const userRoutes = require("./user");
const partyRoutes = require("./party");
const forumRoutes = require("./forum");

// Book routes
router.use("/user", userRoutes);

router.use("/party", partyRoutes);

router.use("/forum", forumRoutes);

module.exports = router;
