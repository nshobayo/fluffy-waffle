/**
 * Created by Nisola on 1/3/16.
 */

//TRANSFER TO API REPO
var url = 'localhost:3000/mongoTest';
var mongo = require('mongo');
var db = require('monk')(url);



//Manages Google Authentication Flow
function googleUserAuth(user) {
    //parse ggl user and create generic user
    genAuth(newUser);
}


// Manages Fb Authentication Flow
function fbUserAuth(user) {
    //parse ggl user and create generic user

    genAuth(newUser);
}

// manages oAuth authentication Flow
function oAuth(user){
    //parse ggl user and create generic user

    genAuth(newUser);
}

//Manages commnon Auth (DB Management from here)
function genAuth(user){
        //callback for Handling db response
    //Check key against DB or Add new User
});


