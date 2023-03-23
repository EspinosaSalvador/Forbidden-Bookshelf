// * crear routas de express son otra cosa de las de server.js

const router = require("express").Router();

const bookRoutes = require("./books-routes");
const authorRoutes = require("./authors-routes");

router.use("/books", bookRoutes);
router.use("/author", authorRoutes);
console.log(2);
router.get("/", async (req, res) => {
  res.render("books");
});
router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/FAQ", async (req, res) => {
  res.render("FAQ");
});
router.get("/company", async (req, res) => {
  res.render("company");
});
router.get("/team", async (req, res) => {
  res.render("team");
});

module.exports = router;
