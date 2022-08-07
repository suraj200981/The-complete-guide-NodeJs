const express = require("express");
const router = express.Router();

const path = require("path");

//express will always end up at the "/" route
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
}); //home middleware

module.exports = router;
