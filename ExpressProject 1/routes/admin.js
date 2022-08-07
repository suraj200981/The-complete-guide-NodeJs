const express = require("express");
const router = express.Router();

const path = require("path");

//all admin routes will be prefixed with /admin

//admin/add-product GET
router.get("/add-product", (req, res, next) => {
  console.log("Products page");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
}); //add product middleware

//admin/add-product POST
//changed to get request, 'use' is for all requests
router.post("/add-product", (req, res, next) => {
  console.log(req.body.product.toString());
  res.redirect("/"); //redirect to home page
}); //product middleware

module.exports = router;
