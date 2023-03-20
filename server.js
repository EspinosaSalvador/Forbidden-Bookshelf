const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers/index");
const sequelize = require("./config/connection");
//const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/html/index.html"))
);
app.get("/signin.html", (req, res) =>
  res.sendFile(path.join(__dirname, "public/html/signin.html"))
);
app.get("/FAQ.html", (req, res) =>
  res.sendFile(path.join(__dirname, "public/html/FAQ.html"))
);
app.get("/team.html", (req, res) =>
  res.sendFile(path.join(__dirname, "public/html/team.html"))
);
app.get("/company.html", (req, res) =>
  res.sendFile(path.join(__dirname, "public/html/company.html"))
);
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/html/404.html"))
);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
