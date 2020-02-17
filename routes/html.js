// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require('express');

var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/.html"));
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/cms", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/cms.html"));
});

router.get("/posts", function(req,res) {
  res.sendFile(path.join(__dirname, "..public/post.html"));
});

router.get("/users", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/cms.html"));
});


module.exports = router;