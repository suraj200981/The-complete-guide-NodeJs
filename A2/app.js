const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Users");
  res.send("<h1>Users</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Home");
  res.send("<h1>Home Page</h1>");
});

app.listen(3000);
