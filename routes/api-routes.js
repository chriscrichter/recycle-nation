// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Routes
// =============================================================
module.exports = function(app) {

  // Get a specific material
  app.get("/api/:description", function(req, res) {
    Book.findAll({
      where: {
        description: {
          [Op.like]: "%" + req.params.description + "%"
        }
      }
    }).then(function(results) {
      res.json(results);
    });
  });
}

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
  
