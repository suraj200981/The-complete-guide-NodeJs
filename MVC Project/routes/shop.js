const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.js");
////when we are at this url we will render the shop page and pass the data to the shop page
//express will always end up at the "/" route
router.get("/", productController.getProductsHomepage); //home middleware

module.exports = router;
