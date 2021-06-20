let myLibrary = [
  {
    title: 'Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    pages: '224',
    read: false,
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
  addToStorage()
  bookTitle.value = ""
  bookAuthor.value = ""
  bookPages.value = ""
  bookRead.value = ""
  makeCards()
}

function makeCards() {
  myLibrary.forEach((book) => {
    bookCount++
    book.num = bookCount
    if (typeof(book.read) == 'boolean'){
      book.read = book.read ? 'Completed' : 'Not Completed'
    }
    if (book.read == 'Completed' || book.read == true) {
      readbutton = `<button id="readbutton" class="completed button" onClick="readBook(this)">${book.read}</button>`
      } else {
      readbutton = `<button id="readbutton" class="notcompleted button" onClick="readBook(this)">${book.read}</button>`
      }
    let div = document.querySelector('#card-container')
    div.innerHTML = div.innerHTML + `
      <div id="book${book.num}" class = "card">
      <div>${book.title}</div>
      <div>Author:</div>
      <div>${book.author}</div>
      <div>Pages: ${book.pages}</div>
      <div class='buttons'>`
      + readbutton +
      `<button class="button" onClick="removeBook(this)">Delete</button>
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

function removeBook(elem) {
  id = elem.parentNode.parentNode.id
  id = id.replace('book','')
  myLibrary.splice(id-1, 1)
  removeAllChildNodes(bookContainer)
  addToStorage()
  makeCards()
}
function readBook(elem) {
  id = elem.parentNode.parentNode.id
  id = id.replace('book','')
  if (myLibrary[id-1].read == 'Completed') {
    myLibrary[id-1].read = 'Not Completed'
  } else {
    myLibrary[id-1].read = 'Completed'
  }
  addToStorage()
  removeAllChildNodes(bookContainer)
  makeCards()
}

function addToStorage() {
  localStorage.setItem("myLibraryString", JSON.stringify(myLibrary));
}

function retrieveStorage() {
  if (localStorage.length != 0) {
    let retrievedData = localStorage.getItem("myLibraryString");
    myLibrary = JSON.parse(retrievedData);
  }
}

//hi how ya doing
retrieveStorage()
addToStorage()
makeCards()

const bookContainer = document.getElementById("card-container")
const bookTitle = document.getElementById('bookTitle')
const bookAuthor = document.getElementById('bookAuthor')
const bookPages = document.getElementById('bookPages')
const bookRead = document.getElementById('bookRead')
const submitButton = document.getElementById("submit")
submitButton.addEventListener('click', addBookToLibrary)
