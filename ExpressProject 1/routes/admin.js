const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
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

//changed to get request, 'use' is for all requests
router.post("/product", (req, res, next) => {
  console.log(req.body.product.toString());
  res.redirect("/"); //redirect to home page
}); //product middleware

module.exports = router;
