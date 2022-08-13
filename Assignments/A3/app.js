/****************Imports********************/
const path = require("path");
const express = require("express");

const app = express();

const usersRoutes = require("./routes/users");
const homeRoutes = require("./routes/home");

app.use(express.static(path.join(__dirname, "public")));

app.use(usersRoutes);
app.use(homeRoutes);

app.listen(3000);
