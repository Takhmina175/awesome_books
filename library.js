class Library {// eslint-disable-line no-unused-vars
  constructor() {
    this.books = [];
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    return { title, author };
  }

  deleteBook(el) {
    this.books = this.books.filter((_, i) => i !== el);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  renderBooks() {
    this.books.forEach(createBook); // eslint-disable-line no-undef
  }
  
  displayDate() {
    this.date = Date();
    return date.toString();
  }
}
