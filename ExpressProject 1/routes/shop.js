const express = require("express");
const router = express.Router();

const path = require("path");

const adminData = require("./admin.js");

//express will always end up at the "/" route
router.get("/", (req, res, next) => {
  console.log("Admin data found: ", adminData.products);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
}); //home middleware

module.exports = router;
