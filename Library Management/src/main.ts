class Person {
    constructor(public username:string, protected password:string, public role:string){
        this.username = username;
        this.password = password;
        this.role = role;
    }

    displayRole(): string {
        return this.role;
    }
}


class Admin extends Person{
    constructor( username:string,  password:string){
        super(username, password, "admin");
    }
}

class Book{
    constructor(public title:string,public author:string){
        this.title = title;
        this.author = author;
    }
}

class Member extends Person{
    private borrowed:Book[] = [];
    constructor(username:string, password:string){
        super(username, password, "member");
        console.log(`User Created with username ${this.username} and password ${this.password}`)
    }

    issueBook(book:Book):void{
        this.borrowed.push(book);
        console.log(`${this.username} is borrowing ${book.title}`)
    }

    returnBook(book:Book):void{
        this.borrowed = this.borrowed.filter(b=>b.author !== book.author || b.title !== book.title);
        console.log(`${this.username} have returned ${book.title}`)
    }

    showBorrowedBooks():Book[]{
        return this.borrowed;
    }
}

class Library{
    private static instance:Library;
    private books:Book[] = [];
    private constructor(){
    }

    static getInstance():Library{
        if(!Library.instance){
            Library.instance = new Library();
        }
        return Library.instance;
    }

    addBook(book:Book){
        this.books.push(book)
        console.log(`${book.title} has been added to Library`)
    }

    displaBooks():Book[]{
        return this.books;
    }
    removeBook(book:Book){
        this.books = this.books.filter(b=>b.title!==book.title || b.author !== book.author);
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
athul.issueBook(FivePointSomeone)
console.log(athul.showBorrowedBooks())
athul.returnBook(Marvel);

console.log(athul.showBorrowedBooks())

