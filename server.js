var express = require('express');
var session = require("express-session");
var passport = require("./config/passport");
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var db = require("./models");
var routes = require('./routes');
var twitter = require("./services/twitter");
const utils = require('./services/utils');
const path = require('path');
const exphbs = require('express-handlebars');
const mysql = require("mysql");

var PORT = process.env.PORT || 8080;
const supportedEnivornments = ['new york', 'chicago', 'los angeles', 'miami', 'seattle', 'boston', 'portland'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/stylesheets'));
app.use(express.static('public/assets/images'));

app.engine('.handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes.twitter);
app.use(routes.user);
app.use(routes.facts);
app.use(routes.html);
app.use(routes.blog);
app.use(routes.api);


io.on('connection', function(socket){
  console.log('a user connected witht he socket id', socket.id);
  // add connection to a random room for this user
  socket.join(supportedEnivornments[utils.getRandomInt(supportedEnivornments.length - 1)]);
  // when a user wants to join a new room, leave all the rooms
  // the user was subscribed to before and join the new room
  socket.on('new room', function(newRoom) {
    console.log("user selected a new room:", newRoom);
    // leave current rooms
    supportedEnivornments.forEach(env => socket.leave(env));
    // join new room
    socket.join(supportedEnivornments.find(e => e === newRoom));
  })
});

//send a new tweet emission every 5000 milliseconds

// const interval = setInterval(() => {
//   console.log('emitting new mock tweet');
//   io.emit('new tweet', {
//     text: 'here is a sample tweet',
//     user: 'some user'
//   });
// }, 5000);

// make an object version of the supportedEnvironments array
const supportedEnivornmentsObject = utils.objOfArraysForEachArrayItem(supportedEnivornments);

// use the object of supported environments to create a twitter stream
// for each supported environment
const streams = twitter.createStreams(supportedEnivornmentsObject);

// assign each environment stream to a socket.io room, i.e.
// when a new tweet comes in for a channel, send it to all the
// socket connections in the room for that supported environment.
supportedEnivornments.forEach(supportedEnv => {
  streams.on('channels/'+supportedEnv, tweet => {
    io.to(supportedEnv).emit('new tweet', tweet);
  });
})

db.sequelize.sync()
  .then(function() {
    http.listen(PORT, function(){
      console.log('listening on *:', PORT);
    });
  });