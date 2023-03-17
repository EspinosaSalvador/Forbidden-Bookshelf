const router = require("express").Router();
const { Author } = require("../../models/Author");

// ! get
console.log("hola");
router.get("/author", async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (err) {
    res.send("hola");
  }
});

module.exports = router;
