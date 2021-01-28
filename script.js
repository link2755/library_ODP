const main = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pagesNumber, imageUrl, isRead) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.imageUrl = imageUrl;
  this.isRead = isRead ? 'read' : 'not-read';
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

}



function addBookToLibrary(book) {

    if(!(book instanceof Book)){
        return false;
    }

    myLibrary.push(book);
    loadABook(book);
    return true;
}

function loadBooks() {
    myLibrary.forEach(book => {
        LoadABook(book);
    })
}

function loadABook(book) {
    const bookContainer = document.createElement('div');



    bookContainer.className = `book-container ${book.isRead}`;
    bookContainer.id = myLibrary.length;

    const image = document.createElement('img');
    image.src = book.imageUrl;

    const title = document.createElement('p');
    title.textContent = book.title;
    
    const author = document.createElement('span');
    author.textContent = `  -${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pagesNumber}`;

    const button = document.createElement('button');
    button.textContent = 'Read';
    button.addEventListener('click', changeRead)

    title.appendChild(author);

    bookContainer.appendChild(image);
    bookContainer.appendChild(title);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(button);

    main.appendChild(bookContainer);
}

function changeRead() {
    let bookSelected = this.parentElement;

    if(bookSelected.classList.contains('read')){
        bookSelected.isRead = 'not-read';
        bookSelected.classList.remove('read');
        bookSelected.classList.add('not-read')
    }else{
        bookSelected.isRead = 'read';
        bookSelected.classList.remove('not-read');
        bookSelected.classList.add('read');
    }
}




let senhorDosAneis = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg", false);
let haha = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg", false);
let zeze = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg", true);
addBookToLibrary(senhorDosAneis);
addBookToLibrary(haha);
addBookToLibrary(zeze);



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


const form = document.querySelector("form");
form.onsubmit = addNewBook;

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
