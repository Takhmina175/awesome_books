const books = [];

const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author');
const bookContainer = document.querySelector('#ptext');

const addBtn = document.getElementById('add-btn');

function addBook(title, author) {
  books.push({title, author});

  return { title, author };
}

function createBook({ title, author }) {
  const bookDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');

  bookTitle.textContent = title;
  bookAuthor.textContent = author;

  bookDiv.append(bookTitle, bookAuthor);
  bookContainer.appendChild(bookDiv);
}

books.forEach(createBook);

addBtn.onclick = function (e) {
  e.preventDefault();
 
  const newBook = addBook(
    titleInput.value,
    authorInput.value
  );

  createBook(newBook);
  titleInput.value = '';
  authorInput.value = '';
};

