/**
 * Created by Nisola on 1/7/16.
 */

modules.exports = function(app, passport){

    app.get("/login", function(req, res){
        res.render('login.html');
    });

    app.get("/loggedIn", function(req, res){
        res.render('loggedIn.html');
    });

    app.get("/logout", function(req,res){
        req.logout();
        res.redirect("/");
    })

    // remove the following on production server
    app.use("/downloads", express.static(__dirname + '/downloads'));
    app.use("/res", express.static(__dirname + '/res'));
    app.use("/css", express.static(__dirname + '/css'));
    app.use("/js", express.static(__dirname + '/js'));
    app.use("/data", express.static(__dirname + '/data'));
}

function isloggedIn(req, res, next ){

    if(req.isAuthenticated()){
        return next;
    }

    res.redirect("/");
}

