const express=  require('express');
const app = express();
const PORT=4000;
const pokeCtrl = require('./controller/pokeController');
const pokemon= require('./models/pokedata');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/pokemon',(req,res) =>{
    console.log(pokemon);
    res.send(pokemon);
})

//set the base path to /pokemon for the router
app.use('/pokemon',pokeCtrl);
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));

module.exports = app;