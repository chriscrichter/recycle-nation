var express = require('express');
var db = require("../models");

var router = express.Router();

router.get("/api/users/:id/:passwords", function(req, res) {
  db.User.findAll({
    where: {
      id: req.params.id,
      passwords: req.params.passwords
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/users/:id", function(req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.get("/api/users/:id", function(req,res) {
  db.User.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Post]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.post("/api/users", function(req, res) {
  db.User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
  });
});

router.delete("/api/users/:id", function(req, res) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;