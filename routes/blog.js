var express = require('express');
var db = require("../models");
var router = express.Router();
var passport = require("../config/passport"); 




router.get("/api/posts/", function(req, res) {
  
  db.Post.findAll({})
    .then(function(dbPost) {
      res.render("index", { post: dbPost} );
    });
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("db", db);
  db.Post.all(function(data) {
    var hbsObject = {
      posts: data
    };
    console.log(data);
    res.render("index", hbsObject);
    console.log(hbsObject); 
  });
});

// passport.authenticate("local")

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

router.get("/api.posts", function(req, res){
  var query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id
  }
  db.Post.findAll({
    where: query,
    include: [db.User]
  }).then(res.json);
});
// , passport.authenticate("local")
router.put("/api/posts", function(req, res){
  const query = {
    where: {
      id:  req.body.id
    }
  };
  db.Post.update(req.body, query).then(res.json);
});

module.exports = router