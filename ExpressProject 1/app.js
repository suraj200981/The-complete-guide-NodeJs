const express = require("express");

const app = express(); //creating an express app

/*route for all requests*/
app.use("/", (req, res, next) => {
  console.log("Always runs...");
  next();
});

/*route for specific requests*/

app.use("/add-product", (req, res, next) => {
  console.log("Products page");
  res.send("<h1>Add new product</h1>");
}); //next middleware

app.use("/", (req, res, next) => {
  console.log("Homepage");
  res.send("<h1>Hello World</h1>");
}); //next middleware

app.listen(3000);
