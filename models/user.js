module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER, 
      validate: {
        len: [5]
      }
    }


  });

  
  User.associate = function(models) {
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
