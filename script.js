let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked)
  myLibrary.unshift(newBook)
  removeAllChildNodes(bookContainer)
  makeCards()
}

function makeCards() {
  myLibrary.forEach((book) => {
    book.read = book.read ? 'Completed' : 'Not Completed'
    let div = document.querySelector('#card-container')
    div.innerHTML = div.innerHTML + `
      <div class = "card">
      <div>${book.title}</div>
      <div>Author: ${book.author}</div>
      <div>Pages: ${book.pages}</div>
      <div>${book.read}</div>
      <div class='buttons'>
          <button>Edit</button>
          <button>Delete</button>
      </div>
    `
  })
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

makeCards()

//makes book input
const bookContainer = document.getElementById("card-container")
const bookTitle = document.getElementById('bookTitle')
const bookAuthor = document.getElementById('bookAuthor')
const bookPages = document.getElementById('bookPages')
const bookRead = document.getElementById('bookRead')
const submitButton = document.getElementById("submit")
submitButton.addEventListener('click', addBookToLibrary)



