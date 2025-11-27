function Book(title, author, pages, status=false) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

  
  this.bookInfo = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status ? 'read' : 'not read yet'}.`);
  };
    
}

allInfo = function() {
  theHobbit.bookInfo();
  harryPotter.bookInfo();
  bible.bookInfo();
  thesatanicbible.bookInfo();
  quran.bookInfo();
  grandgrimoire.bookInfo();
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, false);

const harryPotter = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223);

const bible = new Book('The Bible', 'Various Authors', 1200, true);

const thesatanicbible = new Book('The Satanic Bible', 'Anton LaVey', 192);

const quran = new Book('The Quran', 'Various Authors', 604, true);

const grandgrimoire = new Book('The Grand Grimoire', 'Unknown', 128, false);

theHobbit.bookInfo();

allInfo();