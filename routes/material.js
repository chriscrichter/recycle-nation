var express = require('express');
var router = express.Router();
var db = require("../models");
const Sequelize = require('sequelize'); 
const Op = Sequelize.Op;



router.get("/api/material/:description", function(req, res) {
  console.log('search bar is hit'); 
  console.log(req.params.description); 
  db.Material.findAll({
    where: {
      description: {
        [Op.like]: "%" + req.params.description + "%"
      }
    }
  })
    .then(function(dbMaterial){
      // console.log('response for material')
      // console.log(dbMaterial);
      var hbsObject = {
        materials: dbMaterial
      };
      res.render('index', dbMaterial); 
    })
})




router.get("/api/material/", function(req, res) {
  console.log(db.Post); 
  console.log(db.Material); 
  db.Material.findAll({raw:true})

    .then(function(dbPost) {
      console.log('material search hit');       
      console.log(dbPost); 
     // console.log(dbPost); 
      
      //res.json(dbPost); 
      // console.log(hbsObject); 
      //res.render("index", hbsObject);
     // res.render("index", { post: dbPost} );
    });
});


module.exports = router; 





//const Op = Sequelize.Op;
  









// Book.findAll({
//   where: {
//     description: {
//       [Op.like]: "%" + req.params.description + "%"
//     }
//   }
// }).then(function(results) {
//   console.log(results);
//   res.json(results);
// });
// });
    /*
    console.log(Op)
    Book.findAll({
      where: {
        description: {
          [Op.like]: "%Zinc-air Batteries%"

        }
      }
    })
    .then(response => {
      response.forEach( mat => {
        console.log(mat.get())
      })
    })

    
  });
*/
  
