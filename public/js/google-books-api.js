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
        <h2>${book.volumeInfo.title}</h2>
        <p>Author: ${book.volumeInfo.authors.join(", ")}</p>
        <p>Description: ${book.volumeInfo.description}</p>
        <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="${
        book.volumeInfo.title
      } thumbnail" />
        <button class="add-btn"> Add to collection</button>
      `;
      booksContainer.appendChild(bookElem);
    });
  } else {
    alert("Failed to fetch books");
  }
};

sbmBtn.addEventListener("click", renderbooks);
