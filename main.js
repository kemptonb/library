//DOM table body created as as global var
const tableBody = document.querySelector('#table-body');

//main object array, global
let myLibrary = [];

function Book(title, author, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.read = read;
  
}

//submit form with id function.
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let read = document.getElementById("read").value;

  //send data to constructor
  let book = new Book(title, author, read);
  myLibrary.push(book)
  tableCont();

}

//render table content
function tableCont() {
  for (let i = 0; i < myLibrary.length; i++) {

    if (this["rowBool" + i] === true) {
      continue;

    } else {
      //DOM unique var creation and manipulation
      //bool to skip loop set
      this["rowBool" + i] = true;

      //row
      this["row" + i] = document.createElement('tr');
      this["row" + i].setAttribute('id', ["rowRemove" + i]);//create unique HTML tag id to remove [row = i]
      tableBody.appendChild(this["row" + i]);

      //cell 1
      this["cell1" + i] = document.createElement('td');
      this["cell1" + i].classList.add('content');
      this["cell1" + i].textContent = myLibrary[i].title;
      this["row" + i].appendChild(this["cell1" + i]);

      //cell 2
      this["cell2" + i] = document.createElement('td');
      this["cell2" + i].classList.add('content');
      this["cell2" + i].textContent = myLibrary[i].author;
      this["row" + i].appendChild(this["cell2" + i]);

      //cell 3 button id = readUnread 
      this["cell3" + i] = document.createElement('td');
      this["row" + i].appendChild(this["cell3" + i]);
      this["cell3Button" + i] = document.createElement('button');
      this["cell3Button" + i].setAttribute('id', ['readUnread' + i]);//create unique HTML tag id
      this["cell3Button" + i].classList.add('content');
      this["cell3Button" + i].textContent = myLibrary[i].read;
      this["cell3" + i].appendChild(this["cell3Button" + i]);

      //cell 3 function to change read status
      this["cell3Button" + i].addEventListener('click', function () {
        let element = document.getElementById(['readUnread' + i]);
        if (element.textContent.toLowerCase() == "unread") {
          element.textContent = "Read";
        } else {
          element.textContent = "Unread";
        }
      });

      //cell 4 delete button
      this["cell4" + i] = document.createElement('td');
      this["row" + i].appendChild(this["cell4" + i]);
      this["cell4Button" + i] = document.createElement('button');
      this["cell4Button" + i].setAttribute('id', ['deleteButton' + i]);//create unique HTML tag id
      this["cell4Button" + i].classList.add('content');
      this["cell4Button" + i].textContent = 'Delete';
      this["cell4" + i].appendChild(this["cell4Button" + i]);

      //cell 4 function to delete row upon cell4Button click event
      this["cell4Button" + i].addEventListener('click', function () {
        let element = document.getElementById(["rowRemove" + i]);
        element.parentNode.removeChild(element);
      });

    }//end if/else
  }//end for
}//end function tableCont()
