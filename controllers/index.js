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

module.exports = router;
