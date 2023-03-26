const bookContainer = document.getElementById("books-container");
const showHistory = document.querySelector("#showHistory");
const searchInp = document.getElementById("searchInput");

const renderbooks = async () => {
  const response = await fetch(`/api/book`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

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
  <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="${
        book.volumeInfo.title
      } thumbnail" />
  <div class="book-info">
    <h2>${book.volumeInfo.title}</h2>
    <p>Author: ${book.volumeInfo.authors.join(", ")}</p>
    <p>Description: ${book.volumeInfo.description}</p>
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
