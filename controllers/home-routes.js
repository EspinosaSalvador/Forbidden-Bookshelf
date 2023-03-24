const router = require('express').Router();
const { Author } = require('../models');
const { Book } = require('../models')
const { User } = require("../models");

//Books main page
router.get("/", async (req, res) => {
  res.render("books");
});

//Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

//FAQ Page
router.get("/FAQ", async (req, res) => {
  res.render("FAQ");
});

//Company Page
router.get("/company", async (req, res) => {
  res.render("company");
});

//Team page
router.get("/team", async (req, res) => {
  res.render("team");
});






module.exports = router;