const express = require("express");
const router = express.Router();

//all admin routes will be prefixed with /admin

//admin/add-product GET
router.get("/add-product", (req, res, next) => {
  console.log("Products page");
  res.send(`
    <html>
    <head>
    <title>Add Product</title>
    </head>
    <body>
    <h1>Add a new product</h1>
    <form action="/admin/add-product" method="POST">
    <input type="text" name="product">
    <button type="submit">Add Product</button>
    </input>
    </form>
    </body>
    </html>`);
}); //add product middleware

//admin/add-product POST
//changed to get request, 'use' is for all requests
router.post("/add-product", (req, res, next) => {
  console.log(req.body.product.toString());
  res.redirect("/"); //redirect to home page
}); //product middleware

module.exports = router;
