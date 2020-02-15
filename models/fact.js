// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Fact = sequelize.define("Fact", {
    // The email cannot be null, and must be a proper email before creation
    fact: {
      type: DataTypes.TEXT
    }  });

  return Fact; 
};