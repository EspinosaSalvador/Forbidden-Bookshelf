// * crear routas de express son otra cosa de las de server.js

const router = require("express").Router();

const bookRoutes = require("./books-routes");
const authorRoutes = require("./authors-routes");

router.use("/book", bookRoutes);
router.use("/author", authorRoutes);
console.log(2);
module.exports = router;
