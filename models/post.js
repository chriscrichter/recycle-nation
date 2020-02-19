module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'personal'
    }
  })
  Post.associate = function(models) {
    Post.belongsTo(models.User,
      {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
}
  
  // }
  // return Post;

