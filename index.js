const library = new Library();// eslint-disable-line no-undef
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookContainer = document.querySelector('#ptext');
const addBtn = document.getElementById('add-btn');
const ul = document.createElement('ul');

function createBook({ title, author }) {
  const listItem = document.createElement('li');
  const paraTitle = document.createElement('p');
  const paraAuthor = document.createElement('p');
  const btnRemove = document.createElement('button');
  paraTitle.textContent = title;
  paraAuthor.textContent = author;
  btnRemove.textContent = 'Remove';
  listItem.className = 'list-item';
  btnRemove.className = 'delete';
  btnRemove.setAttribute('id', 'btn-rm');
  listItem.append(paraTitle, paraAuthor, btnRemove);
  ul.appendChild(listItem);
  bookContainer.appendChild(ul);
}
library.renderBooks();
addBtn.onclick = (e) => {
  e.preventDefault();
  const newBook = library.addBook(titleInput.value, authorInput.value);
  createBook(newBook);
  titleInput.value = '';
  authorInput.value = '';
  titleInput.focus();
};

ul.addEventListener('click', (e) => {
  const classes = e.target.className;
  const classesArray = classes.split(' ');
  const item2BeRemoved = e.target.parentElement;
  const nodes = Array.from(ul.children);
  const index = nodes.indexOf(item2BeRemoved);
  if (classesArray.indexOf('delete') !== -1) {
    library.deleteBook(index);
    location.reload(); // eslint-disable-line no-restricted-globals
  }
});