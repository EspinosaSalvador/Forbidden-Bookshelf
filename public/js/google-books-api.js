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
          <img class="book-thumbnail" src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title} thumbnail" />
          <div class="book-info">
            <h2 class="book-title">${book.volumeInfo.title}</h2>
            <p class="book-author">Author: ${book.volumeInfo.authors.join(", ")}</p>
            <p class="book-description">Description: ${book.volumeInfo.description}</p>
            <button id="add-btn" class="add-btn">Add to collection</button>
          </div>
        </div>
      `;
      booksContainer.appendChild(bookElem);

      // Add event listener to the "Add to collection" button
      const addButton = bookElem.querySelector(".add-btn");
      addButton.addEventListener("click", () => {
        const bookTitle = book.volumeInfo.title;
        const bookAuthor = book.volumeInfo.authors.join(", ");
        const bookDescription = book.volumeInfo.description;
        const bookImage = book.volumeInfo.imageLinks.thumbnail;
        addBook(bookTitle, bookAuthor, bookDescription, bookImage);
      });
    });
  } else {
    alert("Failed to fetch books");
  }
};

const addBook = async (title, author, description, image) => {
  const response = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      book_name: title,
      book_author: author,
      book_description: description,
      book_image: image,
    }),
  });

  if (response.ok) {
    const newBook = await response.json();
    console.log("New book added:", newBook);
    alert("Book added to collection!");
  } else {
    alert("Failed to add book");
  }
};

sbmBtn.addEventListener("click", renderbooks);
