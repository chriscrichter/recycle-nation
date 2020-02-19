var express = require('express');
var db = require("../models");
var router = express.Router();
var passport = require("../config/passport");

// passport.authenticate("local")
// passport.authenticate("local")


router.post("/login", function(req, res) {
 
  res.send('true');
});

router.post("/api/signup", function(req, res) {
  console.log(req.body) 
  db.User.create({
    name: req.body.name,
    password: req.body.password
    // zipcode: req.body.zipcode
  })
  .then(function(response) {
    res.json(response)
  })
});

// Route for logging user out
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    res.json({
      name: req.user.name,
      id: req.user.id
    });
  }
});

module.exports = router; 

