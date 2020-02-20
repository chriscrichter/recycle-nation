var express = require('express');
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/api/:material/", function(req, res) {
  console.log(db.Post); 
  console.log(db.material); 
  console.log(req.params);
  db.material.findAll({   
    where: {
    description: {
      
    })
    .then(function(dbMaterial) {
     
      // for (let i = 0; i < dbMaterial.length; i++) {
      //   const current = dbMaterial[i]; 
        
      //   }
      // }
    // console.log
     console.log(dbMaterial); 
     var hbsObject = {
      results: dbMaterial
    };
   // console.log(hbsObject); 
    res.render('index', hbsObject); 
  })
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
  
