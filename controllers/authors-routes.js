const router = require("express").Router();
const { Author } = require("../models");

// ! get

router.get("/", async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
