var db = require("../models");

module.exports = function(app) {
//GET route for getting all posts 
//=========================================================================
  // app.get("/api/posts/", function(req, res) {
  //   db.Post.findAll({})
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  app.get("/api.posts", function(req, res){
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id
    }
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbPost) {
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
  });

  app.put("/api/posts", function(req, res){
    db.Post.update(
      req.body,
    {
      where: {
        id:  req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};