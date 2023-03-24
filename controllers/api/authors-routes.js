const router = require("express").Router();
const { Author } = require("../../models");

//Get all authors
router.get("/", async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get author by ID
router.get("/:id", async (req, res) => {
  try {

    const authorid = await Author.findByPk(req.params.id);

    if (!authorid) {
      res.status(404).json({ message: "No author found with this id" });
      return;
    }
    res.status(200).json(authorid);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Post a new author 
router.post("/", async (req, res) => {
  try {
    const { author_name } = req.body;
    const newAuthor = await Author.create({
      author_name,
    });

    res.status(200).json(newAuthor);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
