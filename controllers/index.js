//Creates express routes
const router = require("express").Router();

//Files for API route and home route files
const apiRoutes = require("./api")
const homeRoutes = require("./home-routes")

//How the path will look like to get to the home routes and the API page
router.use("/", homeRoutes)
router.use("/api", apiRoutes)

module.exports = router;





