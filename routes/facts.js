var db = require("../models");
var express = require('express');
var router = express.Router();




router.post("/facts", function(req, res) {
  // res.json(db.fact);  
   db.Fact.create(req.body)
     .then((facts)=>{
      res.json(facts); 
       //res.render("facts",facts); 
     })
 
 });


module.exports = express.Router();