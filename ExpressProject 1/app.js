const express = require("express");

const bodyParser = require("body-parser");

const app = express(); //creating an express app

const adminRoutes = require("./routes/admin.js"); //importing the admin routes from admin.js

const shopRoutes = require("./routes/shop.js"); //importing the shop routes from shop.js

app.use(bodyParser.urlencoded()); //using body-parser to parse the body of the request

/***********routes************/
app.use(adminRoutes); //using the admin routes
app.use(shopRoutes); //using the shop routes

app.listen(3000);
