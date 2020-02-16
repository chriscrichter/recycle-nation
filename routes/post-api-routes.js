var db = require("../models");

module.exports = function(app) {


//GET route for getting all posts 
//=========================================================================
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
// POST route for saving a new post
//=========================================================================
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create(req.body)
      .then(function(dbPost) {
        res.json(dbPost);
      });
      
  });
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost){
      res.json(dbPost); 
    });
  })



}