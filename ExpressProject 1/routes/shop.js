const express = require("express");
const router = express.Router();

const path = require("path");

const adminData = require("./admin.js");

//express will always end up at the "/" route
router.get("/", (req, res, next) => {
  console.log("Admin data found: ", adminData.products);
  res.render("shop", {
    pageTitle: "Products we sell",
    products: adminData.products,
    hasProducts: adminData.products.length > 0,
  });
}); //home middleware

module.exports = router;
