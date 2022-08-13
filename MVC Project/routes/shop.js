const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.js");

////when we are at this url we will render the shop page and pass the data to the shop page
//express will always end up at the "/" route
router.get("/", (req, res, next) => {
  console.log("Admin data found: ", productController.products);
  res.render("shop", {
    pageTitle: "Products we sell",
    products: productController.products,
    hasProducts: productController.products.length > 0,
    activeShop: true,
    productCSS: true,
  });
}); //home middleware

module.exports = router;
