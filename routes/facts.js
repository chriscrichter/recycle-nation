var db = require("../models");
var express = require('express');
var router = express.Router();


router.get("/api/facts/", function(req, res) {
  db.Fact.findAll({raw:true})
    .then(function(dbFact) {
      console.log('worked for facts');
      // console.log(hbsObject); 
      res.render("index", dbFact);
     // res.render("index", { post: dbPost} );
    });
});



router.post("/facts", function(req, res) {
  // console.log('facts post') 
   db.Fact.create(req.body)
     .then(function(fact){
      // res.json(fact); 
       res.render("index",facts); 
     })
 
 });



module.exports = router;