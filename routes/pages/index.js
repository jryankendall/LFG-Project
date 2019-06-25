const router = require("express").Router();
const pageRoutes = require("./Home");
const withAuth = require("../../middleware/withAuth");


router.use("/pub", pageRoutes);

module.exports = router;