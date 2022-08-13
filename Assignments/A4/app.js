const express = require("express");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars"); //handlebars
const path = require("path");

const app = express(); //creating an express app
///////////////////////////////////////////////////////////////////
//templating engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

//////////////////////////////////////////////////////////////////////////////////////

//importing routes
const indexRouter = require("./routes/home.js");
const usersRouter = require("./routes/users.js");

//////////////////////////////////////////////////////////////////////////////////////
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public"))); //using express to serve static files from the public folder

app.use(indexRouter); //home route
app.use(usersRouter.routes); //users route

app.listen(3000);
