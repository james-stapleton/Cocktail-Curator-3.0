const router = require('express').Router();
const {Cocktails} = require('../models');

router.get('/recipe/:name', async (req,res) => {

    try {
        const cocktailData = await Cocktails.findOne( {where: {name: req.params.name}});
        const cocktailObject = {
            cocktail: {
                id: cocktailData.id,
                name: cocktailData.name,
                ingredients: cocktailData.ingredients,
                instructions: cocktailData.instructions,
                rating: cocktailData.rating,
                views: cocktailData.views,
                image: cocktailData.image
            }
        }
        res.render('recipe', cocktailObject.cocktail);        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ratings', async (req,res) => {
    try {
        res.render('ratings');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/viewed', async (req, res) => {
    try {
        res.render('views');
    } catch (err) {
        res.json(err);
    }
});

router.get('/saved', async (req, res) => {
    try {
        res.render('saved-drinks');
    } catch (err) {
        res.json(err);
    }
});

router.get('/', async (req,res) => {
    try {
        res.render('index');
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;