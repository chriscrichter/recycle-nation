// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require('express');

var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/.html"));
});

module.exports = router;