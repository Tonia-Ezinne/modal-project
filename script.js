// Get the modal, close button, and elements to display the book info
const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Get all book items
const books = document.querySelectorAll(".book-item");

// Loop through all book items and add event listeners
books.forEach((book) => {
  book.addEventListener("click", () => {
    // Get the book title and description from the clicked book
    const title = book.querySelector(".book-title").textContent;
    const description = book.querySelector(".book-description").textContent;

    // Show the modal
    modal.classList.add("show");

    // Set the modal content to the selected book's title and description
    modalTitle.textContent = title;
    modalDescription.textContent = description;
  });
});

// When the user clicks the close button, close the modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show"); // Hide the modal by removing the 'show' class
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show"); // Hide the modal if clicked outside
  }
});
