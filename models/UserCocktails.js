const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Cocktails = require('./Cocktails');
const Users = require('./Users');

class UserCocktails extends Model {} 
    UserCocktails.init (
        {
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: Users,
        //         key: "id"
        //     }
        // },
        // cocktail_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: Cocktails,
        //         key: "id"
        //     }
        // }
    },
    {
        timestamps: false,
        underscored: true,
        sequelize,
        freezeTableName: true,
        modelName: 'user_cocktails',
      },
    );

module.exports = UserCocktails;