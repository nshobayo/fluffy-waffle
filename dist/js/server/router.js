// var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var httpHtmlHeader = httpHtmlHeader;
//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if (request.url === "/") {
    //show search
    response.writeHead(200, httpHtmlHeader);
    // renderer.view("header", response);
    renderer.view("portfolio", response);
    // renderer.view("footer", response);
    response.end();
  } else {
    renderer.load("../.." + request.url, response);
    response.end();
  }

  //if url == "/" && POST
  //redirect to /:username
}

//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, httpHtmlHeader);
    renderer.view("header", response);

    //get json from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON) {
      //show profile

      //Store the values which we need
      var values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
        }
        //Simple response
      renderer.view("profile", response);
      renderer.view("footer", response);
      response.end();
    });

    //on "error"
    studentProfile.on("error", function(error) {
      //show error
      renderer.view("error", response);
      renderer.view("search", response);
      renderer.view("footer", response);
      response.end();
    });

  }
}

module.exports.home = home;
module.exports.user = user;