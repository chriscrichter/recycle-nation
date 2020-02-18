// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var express = require('express');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/.html"));
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/signup", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/posts");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// router.get("/posts", isAuthenticated, function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/posts.html"));
// });

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