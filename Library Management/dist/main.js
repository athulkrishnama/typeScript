"use strict";
class Person {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    displayRole() {
        return this.role;
    }
}
class Admin extends Person {
    constructor(username, password) {
        super(username, password, "admin");
    }
}
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.title = title;
        this.author = author;
    }
}
class Member extends Person {
    constructor(username, password) {
        super(username, password, "member");
        this.borrowed = [];
        console.log(`User Created with username ${this.username} and password ${this.password}`);
    }
    issueBook(book) {
        this.borrowed.push(book);
        console.log(`${this.username} is borrowing ${book.title}`);
    }
    returnBook(book) {
        this.borrowed = this.borrowed.filter(b => b.author !== book.author || b.title !== book.title);
        console.log(`${this.username} have returned ${book.title}`);
    }
    showBorrowedBooks() {
        return this.borrowed;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    static getInstance() {
        if (!Library.instance) {
            Library.instance = new Library();
        }
        return Library.instance;
    }
    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} has been added to Library`);
    }
    displaBooks() {
        return this.books;
    }
    removeBook(book) {
        this.books = this.books.filter(b => b.title !== book.title || b.author !== book.author);
        console.log(`${book.title} has been removed from Library`);
    }
}
const lib = Library.getInstance();
// books
const Marvel = new Book("Marvel Comic", "Stanlee");
const ShivaPuranam = new Book("Immortals of Meluha", "Amish");
const FivePointSomeone = new Book("5 Point Some One", "Chetan Bhagat");
const KrishnaKey = new Book("Krishna Key", "Aswin Sanghi");
const ScionofIkshvaku = new Book("Scion of Ikshvaku", "Amish");
// users
const athul = new Member("athul", "pwd");
const jejo = new Member("Jeejo", "jj");
const abhi = new Member("Abhishek", "abhi");
// Adding books to Library
lib.addBook(Marvel);
lib.addBook(ShivaPuranam);
lib.addBook(FivePointSomeone);
lib.addBook(KrishnaKey);
lib.addBook(ScionofIkshvaku);
console.log(lib.displaBooks());
lib.removeBook(KrishnaKey);
console.log(lib.displaBooks());
athul.issueBook(Marvel);
athul.issueBook(FivePointSomeone);
console.log(athul.showBorrowedBooks());
athul.returnBook(Marvel);
console.log(athul.showBorrowedBooks());
