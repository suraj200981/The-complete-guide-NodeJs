const http = require("http");

const express = require("express");

const app = express(); //creating an express app

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // this allows the request to continue to the next middleware
}); //middleware

app.use((req, res, next) => {
  console.log("In another the middleware");
  res.send("<h1>Hello World</h1>");
}); //next middleware
const server = http.createServer(app);

server.listen(3000);
