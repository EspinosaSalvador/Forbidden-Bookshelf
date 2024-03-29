const router = require("express").Router();
const { Author } = require("../models");
const { Book } = require("../models");
const { User } = require("../models");
const withAuth = require("../utils/Auth");

router.get("/", withAuth, async (req, res) => {
  res.render("books", { logged_in: req.session.logged_in });
});

//Renders login Page
router.get("/login", (req, res) => {
  res.render("login");
});

//Renders the FAQ Page
router.get("/FAQ", withAuth, async (req, res) => {
  res.render("FAQ", { logged_in: req.session.logged_in });
});

//Renders the Company Page
router.get("/company", withAuth, async (req, res) => {
  res.render("company", { logged_in: req.session.logged_in });
});

//Renders the team Page
router.get("/team", withAuth, async (req, res) => {
  res.render("team", { logged_in: req.session.logged_in });
});
// Rednder Data History Page
router.get("/history", withAuth,  async (req, res) => {
  res.render("history", { logged_in: req.session.logged_in });
});
//Renders main page
router.get("/comingsoon", withAuth, async (req, res) => {
  res.render("comingsoon", { logged_in: req.session.logged_in });
});
//Renders coming soon page

module.exports = router;
