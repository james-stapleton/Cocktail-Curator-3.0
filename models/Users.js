const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {} 
    User.init (
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
      },
      is21: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'users',
    },
  );

module.exports = User;