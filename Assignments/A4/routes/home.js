const express = require("express");
const router = express.Router();

const usersData = require("./users.js");

//render the home page
router.get("/", (req, res) => {
  //renders the home page and passes the users data to the page
  res.render("home", {
    title: "Home",
    users: usersData.usersArr,
    hasUsers: usersData.usersArr.length > 0,
  });
});

//exporitng the home router so it can be used in app.js
module.exports = router;
