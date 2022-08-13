const express = require("express");
const router = express.Router();

const usersArr = [];

//render users page endpoint and pass the users data to the page
router.get("/users", (req, res) => {
  res.render("users", {
    title: "Add Users",
  });
});

//endpoint to add users to the users array
router.post("/addUsers", (req, res) => {
  console.log(req.body);
  usersArr.push({ user: req.body.title });
  res.redirect("/");
});

//When we want to export multiple variables/functions from one module to another, we use exports.
//export the users router so it can be used in app.js
exports.routes = router; //have to use route instead of router because router is a reserved word in javascript and can't be used as a variable name when we use it in app js to pass array of users to the users page
exports.usersArr = usersArr;
