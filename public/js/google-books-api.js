const bookContainer = document.getElementById("books-container");
const sbmBtn = document.querySelector("#submitButton");
const searchInp = document.getElementById("searchInput");

const renderbooks = async () => {
  const searchQuery = searchInp.value; // get value of search input
  const response = await fetch(
    `/api/book/getBooks?searchQuery=${searchQuery}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (response.ok) {
    const books = await response.json();
    console.log(books);
    console.log(typeof books);
    const booksContainer = document.querySelector("#books-container");

    booksContainer.innerHTML = "";

    books.items.forEach((book) => {
      const bookElem = document.createElement("div");
      bookElem.classList.add("book");

      bookElem.innerHTML = `
        <div class="book-card">
  <img class="book-thumbnail" src="${
    book.volumeInfo.imageLinks.thumbnail
  }" alt="${book.volumeInfo.title} thumbnail" />
  <div class="book-info">
    <h2 class="book-title">${book.volumeInfo.title}</h2>
    <p class="book-author">Author: ${book.volumeInfo.authors.join(", ")}</p>
    <p class="book-description">Description: ${book.volumeInfo.description}</p>
    <button id="add-btn" class="add-btn">Add to collection</button>
  </div>
</div>
      `;
      booksContainer.appendChild(bookElem);
    });
  } else {
    alert("Failed to fetch books");
  }
};

sbmBtn.addEventListener("click", renderbooks);
