const main = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pagesNumber, imageUrl) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.imageUrl = imageUrl;
  isRead = true;
}

function newBook(){
    const title = prompt("Title:");
    const author = prompt("Autor:");
    const pagesNumber = prompt("Number of Pages:");
    const imageUrl = prompt("Url for book Cover:");
    
    const book = new Book(title, author, pagesNumber, imageUrl)
    addBookToLibrary(book);
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
    bookContainer.className = "book-container read";
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
    const bookSelected = this.parentElement;
    
    if(bookSelected.isRead == true){
        bookSelected.isRead = false;
        bookSelected.classList.remove('read');
        bookSelected.classList.add('not-read')
    }else{
        bookSelected.isRead = true;
        bookSelected.classList.remove('not-read');
        bookSelected.classList.add('read');
    }
}






let senhorDosAneis = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg");
let haha = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg");
let zeze = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg");
addBookToLibrary(senhorDosAneis);
addBookToLibrary(haha);
addBookToLibrary(zeze);



//Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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