//DOM table body created as as global var
const tableBody = document.querySelector('#table-body');
const form = document.getElementById("form_id");
const alertError = document.getElementById("alertError");
alertError.textContent = "";

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
  //check form for empty inputs
  let checker = checkform(form);
  if (checker) {
    alertError.textContent = "";

    //send form data to constructor
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let read = document.getElementById("read").value;

    //send data to constructor
    let book = new Book(title, author, read);
    myLibrary.push(book);
    console.log(myLibrary);

    //
    tableCont();

    //reset form upon submit
    document.getElementById("form_id").reset();

  }

  //render table content
  function tableCont() {
    for (let i = 0; i < myLibrary.length; i++) {

      if (this["rowBool" + i] === true) {
        continue;

      } else {
        //make table visible
        tableBody.style.visibility = "visible";

        //DOM unique var creation and manipulation
        //bool to skip loop set with continue
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
            let readStatus = myLibrary[i];
            readStatus.read = "Read";
            console.log(myLibrary);

          } else {
            element.textContent = "Unread";
            let readStatus = myLibrary[i];
            readStatus.read = "Unread";
            console.log(myLibrary);

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
          checkDelete();
        });

      }//end if/else
    }//end for
  }//end form validation
}//end function tableCont()

function checkform(form) {
  // get all the inputs within the submitted form
  let inputs = form.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    // only validate the inputs that have the required attribute
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        // found an empty field that is required
        alertError.textContent = "*blank input";
        return false;
      }
    }
  }
  return true;
}

function checkDelete() {
  if (tableBody.childElementCount == 1) {
    tableBody.style.visibility = "hidden";
  }

}
