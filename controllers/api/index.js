// TODO

const router = require('express').Router();

const userRoutes = require('./user-routes');
const cocktailRoutes = require('./cocktail-routes');
const userCocktailRoutes = require('./join-table-routes');
const ratingsRoutes = require('./ratings-routes');

router.use('/users', userRoutes);
router.use('/cocktails', cocktailRoutes);
router.use('/usercocktails', userCocktailRoutes);
router.use('/ratings', ratingsRoutes);

module.exports = router;
