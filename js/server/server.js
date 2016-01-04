var express = require('express')
var path = require('path');
var users = require('UsersApi');
var app = express()
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;

// remove the following on production server
app.use("/res", express.static(__dirname + '/res'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/data", express.static(__dirname + '/data'));
app.use("/UsersApi", users);
// app.use("/downloads", express.static(__dirname + '/downloads'));


app.get('/*', function (req, res, next) {
  res.sendFile(path.resolve(__dirname + '/index.html'), {}, function (err) {

  });
});

/****************************************
 Begin facebook auth
***************************************** */
passport.use(
    new FacebookStrategy({
      clientID: "---CID---",
      clientSecret: "---Secret----",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      function( accessToken, refreshToken, profile, done){
        users.fbUser(profile, function(err, user){
           if(err){
             return done(err);
           }
          return done(null, user);
        });
      }
));

app.get('auth/facebook',passport.authenticate('facebook'));


app.get('auth/facebook/callback', {successRedirect: "/",
                                   failureRedirect: "/login"});




app.listen(27942);
