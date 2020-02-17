// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  app.get("/posts", function(req,res) {
    res.sendFile(path.join(__dirname, "..public/post.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

};
