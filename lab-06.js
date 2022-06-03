class Book {
    constructor(title = '', author = '', pubDate = '', isbn = "-1"){
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
        this.isbn = isbn;
    }
}
class Library {
    constructor(name = '') {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "-1" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
    deleteBook(isbn) {
        let isFinish = false;
        for (let index of this._books) {
            if (index.isbn == isbn) {
                this._books.splice(this._books.indexOf(index), 1);
                isFinish = true;
            }
        }
        if (!isFinish) console.log('No matching ISBN found');
    }
  }

// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const funnyBook = new Book("Funny Book", "Funny Guy", "12/12/2012", "0");
const evilBook = new Book("The Evil Book", "Sir Evil The Third", "10/31/1582", "1");

// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(funnyBook);
library.addBook(evilBook);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("0");
library.listBooks();