// Load required tools
var express = require('express')
var path = require('path');
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var app = express()

var passport = require('passport')
var configDB = require('./config/configDB.js');

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
// Finish Loading Tools


require('./config/passport')(passport);

//connect to DB
mongoose.connect(configDB.url);

app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: "thisissecrete"}));
app.use(passport.initialize());
app.use(passport.session());

//pass in routes
require('./routes.js')(app, passport);

//application is launched
app.listen(port);
