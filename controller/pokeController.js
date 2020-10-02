const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokedata');

router.get('/',(req,res)=>{
    res.render('index',{
        poke:pokemon
    })
});


module.exports = router;