const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const pageRoutes = require("./pages");
const testRoutes = require('./test');

// API Routes
router.use("/api", apiRoutes);

router.use("/pages", pageRoutes);

router.use("/devtests", testRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

console.log("Routes loaded");

module.exports = router;
