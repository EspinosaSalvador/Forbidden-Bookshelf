//Create Express Routes
const router = require("express").Router();

//Files for API
const bookRoutes = require("./books-routes");
const authorRoutes = require("./authors-routes");
const userRoutes = require("./user-routes");

//How the path will look like to get to the API Files 
router.use("/book", bookRoutes);
router.use("/author", authorRoutes);
router.use("/users", userRoutes)

module.exports = router;
