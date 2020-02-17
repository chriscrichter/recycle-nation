var express = require('express');
var db = require("../models");
var router = express.Router();

router.get("/api/posts/", function(req, res) {
  db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

router.post("/api/posts", function(req, res) {
  console.log(req.body);
  db.Post.create(req.body)
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

router.delete("/api/posts/:id", function(req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(dbPost){
    res.json(dbPost); 
  });
})

module.exports = router
