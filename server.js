//Call the express libraries
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers/index");
const sequelize = require("./config/connection");
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set Handlebars as the default template engine
app.engine("handlebars", hbs.engine);
// Set the handlebars engine for express to use
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.get("*", (req, res) => res.render("404"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
