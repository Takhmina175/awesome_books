class Library { // eslint-disable-line no-unused-vars
  constructor() {
    this.books = [];
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  renderBooks() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    return this.books;
  }

  addBook(title, author) {
    const bookArray = this.renderBooks();
    bookArray.push({ title, author });
    localStorage.setItem('books', JSON.stringify(bookArray));
    return { title, author };
  }

  deleteBook(el) {
    const bookArray = this.renderBooks();
    const newArray = bookArray.filter((_, i) => i !== el);
    localStorage.setItem('books', JSON.stringify(newArray));
  }
}
