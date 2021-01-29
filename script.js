const main = document.querySelector("main");

let myLibrary = [];
loadFromLocalStorage();

loadBooks();

function Book(title, author, pagesNumber, imageUrl, isRead) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.imageUrl = imageUrl;
  this.isRead = isRead ? 'read' : 'not-read';
  this.id = myLibrary.length;
}

function addNewBook(){

    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author").value;
    const pagesNumber = document.getElementById("pages").value;
    const imageUrl = document.getElementById("book-img").value;
    const isRead = document.getElementById("is-read");

    const book = new Book(title, author, pagesNumber, imageUrl, isRead.checked);
    addBookToLibrary(book);
    
    //reseting forms and closing popup
    const form = document.querySelector("form");
    form.reset();

    //close the modal in submition
    modal.style.display = "none";

    updateLocalStorage();

}

function addBookToLibrary(book) {

    if(!(book instanceof Book)){
        return false;
    }

    myLibrary.push(book);
    loadSingleBook(book);
    return true;
}

function loadBooks() {
    for(let i in myLibrary){
        loadSingleBook(myLibrary[i]);
    }
}


function loadSingleBook(book) {
    const bookContainer = document.createElement('div');

    bookContainer.className = `book-container ${book.isRead}`;
    bookContainer.id = book.id;

    const image = document.createElement('img');
    image.classList = 'book-cover'
    image.src = book.imageUrl;

    const title = document.createElement('p');
    title.textContent = book.title;
    
    const author = document.createElement('span');
    author.className = 'author-name'
    author.textContent = `  -${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pagesNumber}`;

    const deleteBook = document.createElement('button');
    deleteBook.className = 'delete-button'
    deleteBook.textContent = "Delete"
    deleteBook.addEventListener('click', removeBook);

    const button = document.createElement('button');
    button.className = 'read-button'
    button.textContent = book.isRead == 'read' ? 'Read' : 'Mark as Read';
    button.addEventListener('click', changeRead)


    title.appendChild(author);

    bookContainer.appendChild(image);
    bookContainer.appendChild(title);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(deleteBook);
    bookContainer.appendChild(button);

    main.appendChild(bookContainer);
}


function changeRead() {
    const bookSelected = this.parentElement;
    const id = bookSelected.id;

    if(bookSelected.classList.contains('read')){
        myLibrary[id].isRead = 'not-read';
        bookSelected.classList.remove('read');
        bookSelected.classList.add('not-read')
        this.textContent = "Mark as Read"
    }else{
        myLibrary[id].isRead = 'read';
        bookSelected.classList.remove('not-read');
        bookSelected.classList.add('read');
        this.textContent = "Read"

    }
    updateLocalStorage();
}

function removeBook(){
    const removedBook = this.parentElement;
    myLibrary.splice(removedBook.id, 1);
    main.removeChild(this.parentElement);

    updateAllId()
    updateLocalStorage();
}

//update Ids after a removal
function updateAllId(){
    const bookContainers = document.querySelectorAll('.book-container');
    bookContainers.forEach((book, index) => {
        myLibrary[index].id = index;
        book.id = index;
    })
}

function updateLocalStorage(){
    if (storageAvailable('localStorage')) {
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }
}

function loadFromLocalStorage(){
    if (storageAvailable('localStorage')) {
        
        //checks if theres already a stored library
        if(!localStorage.getItem('myLibrary')){
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

        }else{
            myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
        }
    }
      else {
        alert("Sorry, your browser don't support local Storage, your informations won't be saved")
    }
}

//function checks if local storage is avaible in browser
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

//Modal
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("new-book-button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

const form = document.querySelector("form");
form.onsubmit = addNewBook;

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);