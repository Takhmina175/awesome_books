const library = new Library();// eslint-disable-line no-undef
const dom = new Dom();// eslint-disable-line no-undef

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.getElementById('add-btn');

const ul = document.createElement('ul');
ul.setAttribute('id', 'book-list');

library.renderBooks().forEach(dom.createBook);

addBtn.onclick = (e) => {
  e.preventDefault();
  const newBook = library.addBook(titleInput.value, authorInput.value);
  dom.createBook(newBook);
  titleInput.value = '';
  authorInput.value = '';
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
