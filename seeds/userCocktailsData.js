const { UserCocktails, Cocktails } = require('../models');

const userCocktailsData = [
    {
        userId: 1,
        cocktailId: 1
    },
    {
        userId: 1,
        cocktailId: 2
    },
    {
        userId: 2,
        cocktailId: 1
    },
    {
        userId: 3,
        cocktailId: 2
    },
];

const seedUserCocktailsData = () => UserCocktails.bulkCreate(userCocktailsData);

module.exports = seedUserCocktailsData;