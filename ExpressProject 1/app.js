/**************Imports*************/
const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");
const { engine } = require("express-handlebars"); //handlebars

const app = express(); //creating an express app
///////////////////////////////////////////////////////////////////
//templating engine
app.engine(".hbs", engine({ extname: ".hbs", defaultLayout: false }));
app.set("view engine", ".hbs");
app.set("views", "./views");

//////////////////////////////////////////////////////////////////////////////////////
const adminRoutes = require("./routes/admin.js"); //importing the admin routes from admin.js

const shopRoutes = require("./routes/shop.js"); //importing the shop routes from shop.js

app.use(bodyParser.urlencoded()); //using body-parser to parse the body of the request

app.use(express.static(path.join(__dirname, "public"))); //using express to serve static files from the public folder

/***********routes************/
app.use("/admin", adminRoutes.routes); //using the admin filtered routes
app.use(shopRoutes); //using the shop routes

//404 middleware
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found - 404" });
});

app.listen(3000);
