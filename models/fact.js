// Creating our User model

module.exports = function(sequelize, DataTypes) {
  const Fact = sequelize.define('Fact', {
    fact: {
      type: DataTypes.TEXT
    }
  })
  return Fact;
}