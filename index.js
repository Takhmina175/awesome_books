const library = new Library();// eslint-disable-line no-undef
const mainContainer = document.querySelector('.main-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const bookContainer = document.querySelector('#ptext');
const addBtn = document.getElementById('add-btn');
const ul = document.createElement('ul');
const addNew = document.getElementById('addNew');
const title = document.querySelector('.heading');
const hr = document.querySelector('hr');
const list = document.getElementById('list');


function createBook({ title, author }) {
  const listItem = document.createElement('li');
  const bookDiv = document.createElement('div');
  const btnDiv = document.createElement('div');
  const paraTitle = document.createElement('p');
  const paraAuthor = document.createElement('p');
  const btnRemove = document.createElement('button');

  paraTitle.innerHTML = `${title} by`;
  paraAuthor.textContent = author;
  btnRemove.textContent = 'Remove';
  listItem.className = 'list-item';
  btnRemove.className = 'delete';
  btnRemove.setAttribute('id', 'btn-rm');
  bookDiv.className = 'bookDiv';
  btnDiv.className = 'btnDiv';
  bookDiv.append(paraTitle, paraAuthor);
  btnDiv.appendChild(btnRemove);
  listItem.append(bookDiv, btnDiv);
  ul.appendChild(listItem);
  bookContainer.appendChild(ul);

  bookContainer.style.display = library.books.length === 0 ? 'none' : 'block';
}

bookContainer.style.display = library.books.length === 0 ? 'none' : 'block';

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
  const item2BeRemoved = e.target.parentElement.parentElement;
  const nodes = Array.from(ul.children);
  const index = nodes.indexOf(item2BeRemoved);

  if (classesArray.indexOf('delete') !== -1) {
    library.deleteBook(index);
    location.reload(); // eslint-disable-line no-restricted-globals
  }
});
const targetForm = mainContainer.lastElementChild;
const targetTitle = mainContainer.firstElementChild;
const targetHr = mainContainer.firstElementChild.nextElementSibling.nextElementSibling;
const targetBookList = mainContainer.firstElementChild.nextElementSibling;
addNew.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    targetForm.style.display !== 'none'
    && targetTitle.style.display === 'block'
    && targetHr.style.display === 'block'
  ) {
    targetForm.style.display = 'none';
    targetTitle.style.display = 'block';
    targetHr.style.display = 'block';
  } else {
    targetForm.style.display = 'block';
    targetTitle.style.display = 'none';
    targetHr.style.display = 'none';
  }
});
console.log(targetBookList, targetTitle, targetHr);
console.log(targetForm);

list.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    targetBookList.style.display !== "none" &&
    targetTitle.style.display !== "none" &&
    targetHr.style.display === "block" &&
    targetForm.style.display === "block"
  ) {
    targetTitle.style.display = "block";
    targetBookList.style.display = "block";
    targetHr.style.display = "none";
    targetForm.style.display = "none";
  } else {
    targetForm.style.display = "block";
    targetBookList.style.display = "none";
    targetTitle.style.display = "none";
    targetHr.style.display = "block";
  }

});