// const tableBody = document.getElementById('search-table');
// const searchButton = document.getElementById('search-button');


const renderbooks = async () => {
  const response = await fetch('/api/book/getBooks', { //TODO: check if this one needs the node.js rout or the folder route
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const books = await response.json();
    const booksContainer = document.querySelector('#books-container');

    booksContainer.innerHTML = '';

    books.forEach((book) => {
      const bookElem = document.createElement('div');
      bookElem.classList.add('book');
      bookElem.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Description: ${book.description}</p>
        <button class=add-btn>Add to collection</button>
      `;
      booksContainer.appendChild(bookElem);
    });
  } else {
    alert('Failed to fetch books');
  }
};

// function getApi() {

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(data => { // TODO: get this books' data from the Google Books API, we need to use it in the next
//       // Extract the book information from the response object
//       const books = data.items.map(item => ({
//         title: item.volumeInfo.title,
//         authors: item.volumeInfo.authors,
//         description: item.volumeInfo.description,
//         thumbnail: item.volumeInfo.imageLinks.thumbnail
//       }));
//     })
//     .then(function (data) {
//       console.log(data)
//       //Loop over the data to generate a table
//       for (let i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         const createTableRow = document.createElement('tr');
//         const tableData = document.createElement('td');
//         const addButton = document.createElement('button');

//         // Setting the text for the data and the button
//         tableData.textContent = data[i].booktitle; //TODO: this is going to get the book title and all the information necessary to the table
//         addButton.textContent = data[i].html_url;
//         addButton.addEventListener("click", () => {
//           // TODO: This one has to create the button function to add the element to the database
//         }); 

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(addButton);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

// searchButton.addEventListener('click', getApi);
