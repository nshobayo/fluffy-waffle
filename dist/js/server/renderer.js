var fs = require("fs");

function mergeValues(prefix, values, content) {
  // Cycle over the keys
  for (var key in values) {
    // Replace all {{key}} with the value from the values object
    // console.log(key);
    if (Array.isArray(values[key])) {
      for (var i = values[key].length - 1; i >= 0; i--) {
        var new_prefix = key;
        if (values[key].length >= 2) {
          new_prefix += "-" + i;
        }
        if (prefix !== "") {
          new_prefix = prefix + "-" + new_prefix;
        }
        content = mergeValues(new_prefix, values[key][i], content, i);
      }
    } else if (key === "_text") {
      var fullkey = "{{" + prefix + "-text}}";
      console.log(fullkey);
      regex = new RegExp(fullkey, "g");
      if (content.search(regex) > 0) {
        content = content.replace(regex, values[key]);
      }
    } else if (key === "_link") {
      var fullkey = "{{" + prefix + "}}";
      console.log(fullkey);
      regex = new RegExp(fullkey, "g");
      if (content.search(regex) > 0) {
        content = content.replace(regex, applyTemplate(values[key]));
      }
    }
  }
  // return merged content
  return content;
}

function view(templateName, response) {
  var htmlContents = applyTemplate(templateName);
  // Write out the contents to the response
  response.write(htmlContents);
}

function applyTemplate(templateName) {
  // Read from the template file
  var htmlContents = fs.readFileSync('../../html/' + templateName + '.html', {
    encoding: "utf8"
  });
  var dataContents = JSON.parse(fs.readFileSync('../../data/data.json', {
    encoding: "utf8"
  })).content;
  // Insert values in to the content
  htmlContents = mergeValues("", dataContents, htmlContents);
  // Write out the contents to the response
  return htmlContents;
}

function readFile(filename) {
  var fileContents = fs.readFileSync(filename, {
    encoding: "utf8"
  });
  return fileContents;
}

function load(url, response) {
  try {
    var fileContents = fs.readFileSync(url, {
      encoding: "utf8"
    });
  } catch (e) {
    return -1;
  }
  if (url.search(/\.css$/g)) {
    response.writeHead(200, {
      'Content-Length': fileContents.length,
      'Content-Type': 'text/css'
    });
    // console.log("css");
  } else if (url.search(/\.js$/g)) {
    response.writeHead(200, {
      'Content-Length': fileContents.length,
      'Content-Type': 'application/javascript'
    });
    // console.log("js");
  } else if (url.search(/\.html$/g)) {
    response.writeHead(200, {
      'Content-Length': fileContents.length,
      'Content-Type': 'text/html'
    });
    // console.log("html");
  } else if (url.search(/\.ico$/g)) {
    response.writeHead(200, {
      'Content-Length': fileContents.length,
      'Content-Type': 'image/x-icon'
    });
    // console.log("ico");
  } else if (url.search(/\.woff(2?)$/g)) {
    response.writeHead(200, {
      'Content-Length': fileContents.length,
      'Content-Type': 'application/font-woff'
    });
    // console.log("woff");
  }

  response.write(fileContents);
}

module.exports.view = view;
module.exports.load = load;