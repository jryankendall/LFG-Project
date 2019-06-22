const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const pageRoutes = require("./pages");

// API Routes
router.use("/api", apiRoutes);

router.use("/", pageRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

console.log("Routes loaded");

module.exports = router;
