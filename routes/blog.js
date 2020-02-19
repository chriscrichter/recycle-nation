var express = require('express');
var db = require("../models");
var router = express.Router();
var passport = require("../config/passport"); 




router.get("/api/posts/", function(req, res) {
  db.Post.findAll({})
    .then(function(dbPost) {
      let posts = [
        {
          title: 'a post'
        },
        {
          title: 'another post'
        }
      ]
      res.render("blogs", { posts: posts} );
     // res.render("index", { post: dbPost} );
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









// router.get("/", function(req, res) {
//   // res.json(db.fact);  
//    db.Fact.findAll({})
//      .then((facts)=>{
 
//        //res.render("facts",facts); 
//      })
 
//  });