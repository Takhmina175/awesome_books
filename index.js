const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookContainer = document.querySelector('#ptext');
const addBtn = document.getElementById('add-btn');

let books = [];
if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}

const ul = document.createElement('ul');
ul.setAttribute('id', 'book-list');

function createBook({ title, author }) {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  const paraTitle = document.createElement('p');
  const paraAuthor = document.createElement('p');
  const btnRemove = document.createElement('button');

  paraTitle.textContent = title;
  paraAuthor.textContent = author;
  btnRemove.textContent = 'Remove';
  btnRemove.className = 'delete';
  listItem.append(paraTitle, paraAuthor, btnRemove);

  btnRemove.setAttribute('id', 'btn-rm');

  ul.appendChild(listItem);
  bookContainer.appendChild(ul);
}

books.forEach(createBook);

function addBook(title, author) {
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));

  return { title, author };
}

addBtn.onclick = function (e) {
  e.preventDefault();

  const newBook = addBook(titleInput.value, authorInput.value);

  createBook(newBook);
  titleInput.value = '';
  authorInput.value = '';
};

function deleteBook(el) {
  books = books.filter((_, i) => i !== el);
  localStorage.setItem('books', JSON.stringify(books));
}

ul.addEventListener('click', (e) => {
  const classes = e.target.className;
  const classesArray = classes.split(' ');
  const item2BeRemoved = e.target.parentElement;
  const nodes = Array.from(ul.children);
  const index = nodes.indexOf(item2BeRemoved);
  if (classesArray.indexOf('delete') !== -1) {
    deleteBook(index);
    location.reload();
  }
});
