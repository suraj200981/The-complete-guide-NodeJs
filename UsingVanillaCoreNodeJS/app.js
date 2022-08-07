const http = require("http"); //importing http module
//const http = require('./http'); //would find http locally in the same folder

//creating a server
const server = http.createServer(function (req, res) {
  console.log(req.url, req.method, req.headers); //listen will log the request when you go to the url
  //process.exit();// hard exits after one request

  res.setHeader("Content-Type", "text/html"); //setting the header to text/html so that it can be read by the browser
  //the response is the html code when you go to the url
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write(`<body>
  <h1>Hello from my Node.js Server!</h1>
  <p>The date and time is ${new Date()}</p>
  </body>`);

  res.write("</html>");
});

server.listen(3000);

//this example was written without express. Would be alot easier if you used express for requests and responses.
