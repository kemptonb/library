let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Submit form with id function.
function addBookToLibrary() {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    
    //send data to constructor
    let book = new Book(title, author, pages, read);
    myLibrary.push(book)
  
    console.log(myLibrary);
}

