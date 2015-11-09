var express = require('express');
var app = express();
var path = require('path');

//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.listen(8086);