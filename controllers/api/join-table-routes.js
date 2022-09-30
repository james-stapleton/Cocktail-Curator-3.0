const router = require('express').Router();
const { Users, Cocktails, UserCocktails } = require('../../models');
const User = require('../../models/Users');

router.get('/', async (req, res) => {
    try {
        const joinData = await UserCocktails.findAll();
        res.status(200).json(joinData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// add new saved drink route
// requires userId and cocktailID
router.post('/', async (req,res) => {
    try {
        const createData = await UserCocktails.create(req.body);
        res.status(200).json(createData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete saved drink route
// delete by userId and cocktailID??

router.delete('/', async (req,res) => {
    try { 
        console.log(req.body);
        console.log(req.body.userId);
        console.log(req.body.cocktailId);
        console.log("----------------------------------------------------------------");
        const deleteData = await UserCocktails.destroy( {where: {"userId": req.body.userId, "cocktailId": req.body.cocktailId} } );
        res.status(200).json(deleteData);

    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;