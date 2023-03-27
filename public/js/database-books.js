//function to render all the books from the database


const showHistory = document.querySelector("#showHistory");
const booksContainer = document.querySelector("#books-container");

const renderBooks = async () => {
  try {
    const response = await fetch(`/api/book`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const books = await response.json();
      booksContainer.innerHTML = "";

      books.forEach((book) => {
        const bookElem = document.createElement("div");
        bookElem.classList.add("book");


        bookElem.innerHTML = `
        <div class="book-card">
          <img class="book-thumbnail" src="${book.book_image}" alt="${book.book_name} thumbnail" />
          <div class="book-info">
            <h2 class="book-title">${book.book_name}</h2>
            <p class="book-author">Author: ${book.book_author}</p>
            <p class="book-description">Description: ${book.book_description}</p>
          </div>
        </div>
      `;
      booksContainer.appendChild(bookElem);

 
      });
    } else {
      alert("Failed to fetch books");
    }
  } catch (error) {
    console.error(error);
  }
};

showHistory.addEventListener("click", renderBooks);
