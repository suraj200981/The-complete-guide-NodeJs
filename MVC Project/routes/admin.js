const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.js");

//all admin routes will be prefixed with /admin

//admin/add-product GET
router.get("/add-product", productController.getAddProductPage);
//admin/add-product POST
router.post("/add-product", productController.postNewProductName);

module.exports = router;
