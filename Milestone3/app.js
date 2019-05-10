var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var expressValidator = require('express-validator');
var index = require('./routes/index');
var recipe = require('./routes/recipe');
var register = require('./routes/register');
var profile = require('./routes/profile');
var singleRecipe = require('./routes/singleRecipe');

var app = express();

//template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//port
app.set('port', (process.env.PORT || 3000));

//Routes
app.use('/', index.router);
app.use('/recipe', recipe.router);
app.use('/register', register.router);
app.use('/profile', profile.router);
app.use('/singleRecipe', singleRecipe.router);

//Start server
var server = app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});