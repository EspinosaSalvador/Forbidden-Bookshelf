let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// /////////////////////////////////////START OF SEARCH BAR//////////////////////////////////////////////////////////
function search() {
  // get the input value
  const query = document.getElementById("searchInput").value.toLowerCase();

  // get the search results container
  const results = document.getElementById("searchResults");

  // clear previous search results
  results.innerHTML = "";

  // loop through all the elements you want to search
  // for this example, let's assume we have a list of items
  const items = ["apple", "banana", "orange", "pear", "kiwi"];
  for (let i = 0; i < items.length; i++) {
    const item = items[i].toLowerCase();
    // check if the item contains the search query
    if (item.includes(query)) {
      // create a new list item for the search result
      const li = document.createElement("li");
      li.innerText = items[i];
      // add the list item to the search results container
      results.appendChild(li);
    }
  }
}
// /////////////////////////////////////END OF SEARCH BAR//////////////////////////////////////////////////////////
