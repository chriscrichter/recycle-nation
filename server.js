var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var db = require("./models");
var routes = require('./routes');
var twitter = require("./services/twitter");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes.twitter);
app.use(routes.user);
app.use(routes.facts);
app.use(routes.html);
app.use(routes.blog);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected witht he socket id', socket.id);
});

// send a new tweet emission every 5000 milliseconds
// const interval = setInterval(() => {
//   console.log('emitting new mock tweet');
//   io.emit('new tweet', {
//     text: 'here is a sample tweet',
//     user: 'some user'
//   });
// }, 5000);

twitter.on('data', function(data) {
  console.log("got some new twitter data");
  io.emit('new tweet', data);
})

twitter.on('error', function(error) {
  throw error;
});

db.sequelize.sync().then(function() {
  http.listen(PORT, function(){
    console.log('listening on *:', PORT);
  });
});