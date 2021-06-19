let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  //adds to libray array
  let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked)
  myLibrary.unshift(newBook)
  createRow()
}

function createRow() {
  //adds row to html
  let row = document.createElement('div');
  row.classList.add('row');
  tableContainer.prepend(row);
  myLibrary.forEach(book => {
    let div = document.querySelector('.row')
    
    div.innerHTML = div.innerHTML + `
      <div class='row'>
      <div class='data'>Title: ${book.title}</div>
      <div class='data'>Author: ${book.author}</div>
      <div class='data'>Pages: ${book.pages}</div>
      <div class='data'>Completed?: ${book.read}</div>
      </div>
      `
  })
}

const tableContainer = document.getElementById("tableContainer")


const bookTitle = document.querySelector("#bookTitle")
const bookAuthor = document.querySelector("#bookAuthor")
const bookPages = document.querySelector("#bookPages")
const bookRead = document.querySelector("#bookRead")
const submitButton = document.querySelector("#submitButton")
submitButton.addEventListener('click', addBookToLibrary)




