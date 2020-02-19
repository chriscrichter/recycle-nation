var db = require("../models");
var express = require('express');
var router = express.Router();




router.post("/facts", function(req, res) {
  // console.log('facts post') 
   db.Fact.create(req.body)
     .then(function(fact){
      // res.json(fact); 
       res.render("index",facts); 
     })
 
 });



module.exports = router;