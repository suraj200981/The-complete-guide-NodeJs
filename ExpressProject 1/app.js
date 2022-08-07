const express = require("express");

const bodyParser = require("body-parser");

const app = express(); //creating an express app

app.use(bodyParser.urlencoded()); //using body-parser to parse the body of the request

/*route for specific requests*/

app.use("/add-product", (req, res, next) => {
  console.log("Products page");
  res.send(`
  <html>
  <head>
  <title>Add Product</title>
  </head>
  <body>
  <h1>Add a new product</h1>
  <form action="/product" method="POST">
  <input type="text" name="product">
  <button type="submit">Add Product</button>
  </input>
  </form>
  </body>
  </html>`);
}); //add product middleware

app.use("/product", (req, res, next) => {
  console.log(req.body.product.toString());
  res.redirect("/"); //redirect to home page
}); //product middleware

//express will always end up at the "/" route
app.use("/", (req, res, next) => {
  res.send(`
  <html>
  <head>
  <title>Add Product</title>
  </head>
  <body>
  <h1>Home</h1>
  <a href='/add-product'>Add Product</a>
  </body>
  </html>`);
}); //home middleware

app.listen(3000);
