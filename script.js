let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
  myLibrary.unshift(newBook)
}

const bookTitle = document.querySelector("#bookTitle")
const bookAuthor = document.querySelector("#bookAuthor")
const bookPages = document.querySelector("#bookPages")
const bookRead = document.querySelector("#bookRead")
const submitButton = document.querySelector("#submitButton")
submitButton.addEventListener('click', addBookToLibrary)




