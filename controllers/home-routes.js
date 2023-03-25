const router = require('express').Router();
const { Author } = require('../models');
const { Book } = require('../models')
const { User } = require("../models");

//Renders main page
router.get("/", async (req, res) => {


  res.render("books");
});

//Renders login Page
router.get('/login', (req, res) => {
  res.render('login');
});

//Renders the FAQ Page
router.get("/FAQ", async (req, res) => {
  res.render("FAQ");
});

//Renders the Company Page
router.get("/company", async (req, res) => {
  res.render("company");
});

//Renders the team Page
router.get("/team", async (req, res) => {
  res.render("team");
});






module.exports = router;