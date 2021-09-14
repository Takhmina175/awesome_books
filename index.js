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

function createBook({ title, author }) {
  const bookDiv = document.createElement('div');
  const ul = document.createElement('ul')
  const listItemTitle = document.createElement('li');
  const listItemAuthor = document.createElement("li");
  const btnRemove = document.createElement('button')

  listItemTitle.textContent = title;
  listItemAuthor.textContent = author;
  btnRemove.textContent = 'Remove';

  ul.setAttribute('id', 'book-list');
  btnRemove.setAttribute('id', 'btn-rm');
  bookDiv.setAttribute('class', 'delete');


  ul.append(listItemTitle, listItemAuthor, btnRemove);
  bookDiv.appendChild(ul)
  bookContainer.appendChild(bookDiv);

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
  titleInput.value = ''
  authorInput.value = ''
};

const bookList = document.querySelector('#book-list');
bookList.addEventListener("click", (e) => {
  deleteBook(e.target)
});

function deleteBook(el){
  if(el.classList.contains('btn-rm')){
    el.parentElement.parentElement.remove();
    
  }
}


