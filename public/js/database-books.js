const bookContainer = document.getElementById("books-container");
const showHistory = document.querySelector("#showHistory");
const searchInp = document.getElementById("searchInput");

const Book = require("../models/book");

const renderbooks = async () => {
  const response = await fetch(`/api/book`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const books = await response.json();
    console.log(books);
    console.log(typeof books);

    // Retrieve all books from the database and render them
    const allBooks = await Book.findAll();
    const booksContainer = document.querySelector("#books-container");

    booksContainer.innerHTML = "";

    allBooks.forEach((book) => {
      const bookElem = document.createElement("div");
      bookElem.classList.add("book");

      bookElem.innerHTML = `
        <div class="book-card">
          <img src="${book.book_image}" alt="${book.book_name} thumbnail" />
          <div class="book-info">
            <h2>${book.book_name}</h2>
            <p>Author: ${book.book_author}</p>
            <p>Description: ${book.book_description}</p>
            <button id="add-btn">Add to collection</button>
          </div>
        </div>
      `;
      booksContainer.appendChild(bookElem);
    });
  } else {
    alert("Failed to fetch books");
  }
};

showHistory.addEventListener("click", renderbooks);
