const express = require("express");
const router = express.Router();
const { Book } = require("../../models/Book");

// GET /api/book
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
