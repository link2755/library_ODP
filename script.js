const main = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pagesNumber, imageUrl) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.imageUrl = imageUrl;
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
    bookContainer.className = "book-container";

    const image = document.createElement('img');
    image.src = book.imageUrl;

    const title = document.createElement('p');
    title.textContent = book.title;
    
    const author = document.createElement('span');
    author.textContent = ` -${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pagesNumber}`;

    const button = document.createElement('button');
    button.textContent = 'Read';

    title.appendChild(author);

    bookContainer.appendChild(image);
    bookContainer.appendChild(title);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(button);

    main.appendChild(bookContainer);
}




let senhorDosAneis = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg");
let haha = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg");
let zeze = new Book("Harry potter", "J. K. Rowling", 522, "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg");
addBookToLibrary(senhorDosAneis);
addBookToLibrary(haha);
addBookToLibrary(zeze);

