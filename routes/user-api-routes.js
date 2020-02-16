var db = require("../models");

module.exports = function(app) {

  //login
  app.get("/api/users/:id/:passwords", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id,
        passwords: req.params.passwords
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //app.get("/api/users", function(req, res) {

//Get route for finding a user
//=========================================================================
  app.get("/api/users/:id", function(req, res) {

    db.User.findAll({
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req,res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
//POST route for creating a user 
//=========================================================================
  app.post("/api/users", function(req, res) {
    db.User.create(req.body)
      .then(function(dbUser) {
        res.json(dbUser);
    // }).then(function(dbUser) {
    //   res.json(dbUser);
    });

  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};




















// //  API key:
// wGbATRjTXwtxhfjjs3TTfSSNz

// API secret key:
// 1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph

// Access token :759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8
// Copy
// Access token secret :DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S


// var Twitter = require('twitter');
 
// var client = new Twitter({
//   consumer_key: 'wGbATRjTXwtxhfjjs3TTfSSNz',
//   consumer_secret: '1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph',
//   access_token_key: '759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8',
//   access_token_secret: 'DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S'
// });
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });


// client.stream('statuses/filter', {track: 'recycling'},  function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });
// });

