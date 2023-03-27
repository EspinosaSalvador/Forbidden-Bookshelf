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
          <div class="bg-stone grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" book-card>
            <a href="#" class="group book">
              <div class="overflow-hidden bg-stone full-pic book-inner book-info">
                <div class="book-front">
                  <img src="${book.book_image}" alt="${book.book_name} thumbnail"
                    class="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <div class="book-back bg-white p-4">
                  <h3 class="text-sm text-gray-700">Author: ${book.book_author}</h3>
                  <p class="text-xs text-gray-500">
                    Description: ${book.book_description}
                  </p>
                </div>
              </div>
              <h3 class="mt-4 text-sm text-gray-700">${book.book_name}</h3>
            </a>
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
