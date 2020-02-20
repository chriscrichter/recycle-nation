// Dependencies

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Book = sequelize.define("materials", {
  description: Sequelize.STRING,
  description_legacy: Sequelize.STRING,
  long_description: Sequelize.STRING,
  material_id: Sequelize.INTEGER
});

Book.sync();

module.exports = Book;

/*
module.exports = function(sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    description: {
      type: DataTypes.STRING,
    },
    description_legacy: {
      type: DataTypes.STRING
    },
    long_description: {
      type: DataTypes.STRING
    }, 
    material_id: {
      type: DataTypes.INTEGER
    }
  })
  return Book;
}
*/