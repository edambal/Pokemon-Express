const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokedata');

router.get('/',(req,res)=>{
    console.log(pokemon);
    // res.render('index',{
    //     poke:pokemon
    // })
});


module.exports = router;