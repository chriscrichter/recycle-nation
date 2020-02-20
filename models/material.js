module.exports = function(sequelize, DataTypes) {
  const material = sequelize.define('material', {
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
    }, 
  })
  return material;
}