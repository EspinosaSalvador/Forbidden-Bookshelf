const router = require("express").Router();
const { Book } = require("../../models");
const dotenv = require("dotenv");
const { query } = require("express");

// ! get
// API changes:
router.get("/getBooks", async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const searchQuery = req.query.searchQuery;
    const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&fields=items(volumeInfo(title,authors,description,imageLinks(thumbnail)))`;

    const response = await fetch(requestUrl);
    const data = await response.json();

    console.log(data);
    console.log(searchQuery);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all books by ID
router.get("/:id", async (req, res) => {
  try {
    // find one blog by id with associated products
    const bookid = await Book.findByPk(req.params.id);

    if (!bookid) {
      res.status(404).json({ message: "No book found with this id" });
      return;
    }
    res.status(200).json(bookid);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Post new books
router.post("/", async (req, res) => {
  try {
    const { book_name, book_author, book_description, book_image } = req.body;
    const newBook = await Book.create({
      book_name,
      book_author,
      book_description,
      book_image
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
