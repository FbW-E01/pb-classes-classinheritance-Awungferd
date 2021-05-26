// # Class inheritance

// 1. Create a base class called `Publication`.

//     - All publications need an identifier field
//     - All publications need an authors field
//     - All publications need a name field
//     - All publications need a content field
//     - All publications need a created field
//     - When a publication is created, save the current date into the created field
//     - All other fields are null by default
//     - All publications need a method that prints out their description (id, name, authors
class Publication {
  author;
  id;
  name; //publication title
  content;
  pubDate; //created field
  constructor(name, author) {
    this.content = this.content;
    this.name = name;
    this.pubDate = new Date().toLocaleDateString();
    this.URL = this.URL = //address field
      "www.domain.com/" +
      this.name.split(" ").join("-").toLowerCase() +
      ".html";
  }

  describe() {
    console.log(
      `The publication, ID = ${this.id}, Title: '${this.name}', written by ${this.author} is published  ${this.pubDate} and is concerned with ${this.content}`
    );
  }
}
//============
//2. Create a class called "Blogpost" that is a child of Publication
// - All blogpost have an edited field (given during their creation)
//- All blogpost have an address field (given during their creation)

class Blogpost extends Publication {
  edited;

  constructor(edited, author, name, content, pubDate, URL) {
    super(edited);
    this.content = content;
    this.author = author;
    this.name = name;

    this.edited = edited;
  }

  EditReview() {
    console.log(`Post edited by ${this.edited} on ${this.pubDate}`);
  }
}
const blogPost = new Blogpost(
  "Aloys Egwu",
  "Mary Ben",
  "I say, You are Gods!",
  "Exploring man's place in the divine hierarchy"
);
//=====================  3  ==============================
//3. Create a class called "Book" that is a child of Publication

//     - All blogpost have an ISBN field  (given during their creation)
//         (for reference https://en.wikipedia.org/wiki/International_Standard_Book_Number)

class Book extends Publication {
  edited;

  constructor(id, edited, author, name, content, pubDate, URL) {
    super(id, edited);
    this.id = "ISBN 3535696869853";
    this.content = "Astrology, the occult, New Age Spirituality";
    this.author = "Abosuo Abonwuoh";
    this.name = name;
    this.edited = edited;
  }
}
const book = new Book(
  "Salaud",
  "Abanda Manfred",
  "Eliot Smith and Gbenga Kpengko",
  "Conquer Unconquerable Drives"
);

//============= 4 ========
/* 4. Create a class called "Score" that is a child of Publication

    - All scores must have a type field (given during their creation */

// =======================

blogPost.EditReview();
blogPost.describe();

console.log(blogPost);
book.describe();
console.log(book);
//=================
