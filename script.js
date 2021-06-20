let myLibrary = [
  {
    title: 'Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    pages: '224',
    read: true,
  }
];

let bookCount = 0

function Book(title, author, pages, read, num) {
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
    bookCount++
    book.num = bookCount
    if (typeof(book.read) == 'boolean'){
      book.read = book.read ? 'Completed' : 'Not Completed'
    }
    let div = document.querySelector('#card-container')
    div.innerHTML = div.innerHTML + `
      <div id="book${book.num}" class = "card">
      <div>${book.title}</div>
      <div>Author: ${book.author}</div>
      <div>Pages: ${book.pages}</div>
      <div>${book.read}</div>
      <div class='buttons'>
          <button>Edit</button>
          <button onClick="checkId(this)">Delete</button>
      </div>
    `

  })
  bookCount = 0
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function checkId(elem) {
  removeBook(elem.parentNode.parentNode.id);
}

function removeBook(id) {
  id = id.replace('book','')
  myLibrary.splice(id-1, 1)
  removeAllChildNodes(bookContainer)
  makeCards()
}

makeCards()

const bookContainer = document.getElementById("card-container")
const bookTitle = document.getElementById('bookTitle')
const bookAuthor = document.getElementById('bookAuthor')
const bookPages = document.getElementById('bookPages')
const bookRead = document.getElementById('bookRead')
const submitButton = document.getElementById("submit")
submitButton.addEventListener('click', addBookToLibrary)



