// * crear routas de express son otra cosa de las de server.js

const router = require("express").Router();

const bookRoutes = require("./books-routes");
const authorRoutes = require("./authors-routes");
const userRoutes = require("./user-routes");

router.use("/book", bookRoutes);
router.use("/author", authorRoutes);
router.use("/users", userRoutes)

module.exports = router;
