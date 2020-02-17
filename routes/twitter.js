var express = require("express");
var router = express.Router();



router.get('/twitter', function(req, res){
  res.sendFile(`${process.cwd()}/public/socket.html`);  
});

module.exports = router;