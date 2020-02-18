var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var db = require("./models");
var routes = require('./routes');
var twitter = require("./services/twitter");
const path = require('path');
const exphbs = require('express-handlebars');
const mysql = require("mysql");



var PORT = process.env.PORT || 8080;
const supportedEnivornments = ['new york', 'chicago', 'los angeles', 'miami', 'seattle', 'portland'];
// const supportedEnivornments = ['new york'];

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

app.use(routes.twitter);
app.use(routes.user);
app.use(routes.facts);
app.use(routes.html);
app.use(routes.blog);

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

io.on('connection', function(socket){
  console.log('a user connected witht he socket id', socket.id);
  // add connection to the correct room for this user
  socket.join(supportedEnivornments[getRandomInt(supportedEnivornments.length - 1)])
});

//send a new tweet emission every 5000 milliseconds


// const interval = setInterval(() => {
//   console.log('emitting new mock tweet');
//   io.emit('new tweet', {
//     text: 'here is a sample tweet',
//     user: 'some user'
//   });
// }, 5000);

const twitterChannelConfigObject = supportedEnivornments.reduce((channels, env) => {
  channels[env] = [env];
  return channels;
}, {});

const stream = twitter.createStreams(twitterChannelConfigObject);

supportedEnivornments.forEach(supportedEnv => {
  stream.on('channels/'+supportedEnv, tweet => {
    io.to(supportedEnv).emit('new tweet', tweet);
  });
})

db.sequelize.sync()
  .then(function() {
    http.listen(PORT, function(){
      console.log('listening on *:', PORT);
    });
  });