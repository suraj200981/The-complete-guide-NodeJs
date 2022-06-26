const http = require("http"); //importing http module
//const http = require('./http'); //would find http locally in the same folder

const fs = require("fs"); //importing fs module (file system)

//creating a server
const server = http.createServer(function (req, res) {
  const url = req.url;
  //this will only log the request when you go to the url specified i.e. localhost:3000/input
  if (url === "/input") {
    res.setHeader("Content-Type", "text/html"); //setting the header to text/html so that it can be read by the browser
    //the response is the html code when you go to the url
    res.write("<html>");
    res.write("<head><title>Secret area</title></head>");
    res.write('<body style="background: lightblue;"><h1>Enter some data</h1>');
    res.write(
      '<form action="/newPage" method="POST"><input type="text" name="newPage"><button type="submit">Submit</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end(); // this will not continue to the next lines of code. After res.end() the server will stop
  }
  console.log(req.url, req.method, req.headers); //listen will log the request when you go to the url
  //process.exit();// hard exits after one request

  /*This will be used for every other url */
  if (url === "/newPage" && req.method === "POST") {
    const requestBody = [];

    req.on("data", function (chunk) {
      console.log(chunk);
      requestBody.push(chunk);
    }); //this will listen for the data to be sent req.on()

    //now that we have all the chunks of the data, we can convert it to a string
    req.on("end", function () {
      const parsedBody = Buffer.concat(requestBody).toString(); // this will concatenate the chunks of the data and convert it to a string
      console.log(parsedBody); // it console logs as key value pairs
      const finalMessage = parsedBody.split("=")[1]; // this will split the key value pairs and return the value of the key. [1] is the value of the key right of the equal sign
      // finalMessage.replaceAll('+', ' ');// this will replace all the + with a space
      console.log(finalMessage.replaceAll("+", " ")); // it console logs as key value pairs
      fs.appendFileSync(
        "userMsg.txt",
        finalMessage.replaceAll("+", " ") + "\n",
        (err) => {
          res.statusCode = 302; //this will redirect the user to the new page. 302 is a status code for a redirect
          res.setHeader("Location", "/"); //this will set the header to the new page
          return res.end(); // this will not continue to the next lines of code. After res.end() the server will stop
        }
      ); //this will write the data to the file but with dummy data for now
    }); //this will listen for the end of the data to be sent req.on()
  }
  res.setHeader("Content-Type", "text/html"); //setting the header to text/html so that it can be read by the browser
  //the response is the html code when you go to the url
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
});

server.listen(3000);

//this example was written without express. Would be alot easier if you used express for requests and responses.
