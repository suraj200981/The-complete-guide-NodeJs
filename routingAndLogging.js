//import requesthandler
const requestHandler = require("./routes.js");

const http = require("http"); //importing http module
//const http = require('./http'); //would find http locally in the same folder

//creating a server
const server = http.createServer(function (req, res) {
  requestHandler(req, res);
});

server.listen(3000);

//this example was written without express. Would be alot easier if you used express for requests and responses.
