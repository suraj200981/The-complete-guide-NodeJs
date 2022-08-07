/**************Imports*************/
const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express(); //creating an express app

const adminRoutes = require("./routes/admin.js"); //importing the admin routes from admin.js

const shopRoutes = require("./routes/shop.js"); //importing the shop routes from shop.js

app.use(bodyParser.urlencoded()); //using body-parser to parse the body of the request

app.use(express.static(path.join(__dirname, "public"))); //using express to serve static files from the public folder

/***********routes************/
app.use("/admin", adminRoutes); //using the admin filtered routes
app.use(shopRoutes); //using the shop routes

//404 middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
