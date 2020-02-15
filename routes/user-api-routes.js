var db = require("../models");

module.exports = function(app) {

  app.get("/api/users/:id", function(req, res) {

    db.User.findAll({
      where: {
        id: req.params.id
        // passwords: req.params.passwords
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  })
}
