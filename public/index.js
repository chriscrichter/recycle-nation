//var http = require('http').createServer;
var io = require('socket.io');



module.exports = function(app) {


//GET route for getting all posts 
//=========================================================================
  app.get("/twitter", function(req, res) {
    res.sendFile(__dirname + '/socket.html');
  });

  io.on('connection', function(socket){
    console.log('a user connected');
  });

  
// }
// // http.listen(3000, function(){
// //   console.log('listening on *:3000');
// // });
}