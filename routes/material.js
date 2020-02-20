var express = require('express');
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/api/:material/", function(req, res) {
  // console.log(db.Post); 
  // console.log(db.Material); 
  // console.log(req.params);
  db.Material.findAll({   
    
    where: {
      description: {
      
      [Op.like]: "%" + req.params.material + "%"
    }
  }}
    )
    .then(function(dbMaterial) {
      // console.log('material search hit');       
      // console.log(dbPost); 
     // console.log(dbPost); 
      
      //res.json(dbPost); 
      // console.log(hbsObject); 
      //res.render("index", hbsObject);
     // res.render("index", { post: dbPost} );
    console.log(dbMaterial); 
     var hbsObject = {
      results: dbMaterial
    };
    console.log(hbsObject); 
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
  
