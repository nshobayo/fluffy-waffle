var express = require('express')
var path = require('path');

var app = express()

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/*', function (req, res, next) {
  res.sendFile(path.resolve(__dirname + '/index.html'), {}, function (err) {

  });

})

app.listen(8086);