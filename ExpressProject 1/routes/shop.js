const express = require("express");
const router = express.Router();

//express will always end up at the "/" route
router.use("/", (req, res, next) => {
  res.send(`
  <html>
  <head>
  <title>Add Product</title>
  </head>
  <body>
  <h1>Home</h1>
  <a href='/add-product'>Add Product</a>
  <br>
  <br>
  <a href='/products'>Products</a>
  </body>
  </html>`);
}); //home middleware

module.exports = router;
