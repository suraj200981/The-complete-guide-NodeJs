const express = require("express");
const router = express.Router();

const products = [];

//all admin routes will be prefixed with /admin

//admin/add-product GET
router.get("/add-product", (req, res, next) => {
  console.log("Products page");
  res.render("add-product", {
    pageTitle: "Admin area",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
}); //add product middleware

//admin/add-product POST
//changed to get request, 'use' is for all requests
router.post("/add-product", (req, res, next) => {
  //push product to products array
  products.push({ title: req.body.title });

  res.redirect("/"); //redirect to home page
}); //product middleware

exports.routes = router; //export the router to be used in app.js
exports.products = products; //export the products array to be used in app.js
