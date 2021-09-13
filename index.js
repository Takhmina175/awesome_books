let books = [];
if (localStorage.getItem("books") === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem("books"));
}

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const bookContainer = document.querySelector("#ptext");

const addBtn = document.getElementById("add-btn");

function addBook(title, author) {
  books.push({ title, author });
    localStorage.setItem("books", JSON.stringify(books));

  return { title, author };
}

function removeEl(index){
   books = books.filter(function (_, value) {
     return value !== index;
   });
}

function createBook({ title, author }) {
  const bookDiv = document.createElement("div");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const btnRemove = document.createElement("button")

  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  btnRemove.textContent = "Remove";

  btnRemove.setAttribute("id", "btn-rm");
  bookDiv.setAttribute("class", "delete")


  bookDiv.append(bookTitle, bookAuthor, btnRemove);
  bookContainer.appendChild(bookDiv);

  
}

books.forEach(createBook);

addBtn.onclick = function (e) {
  e.preventDefault();

  const newBook = addBook(titleInput.value, authorInput.value);

  createBook(newBook);
  titleInput.value = "";
  authorInput.value = "";
};

const btnRm = document.getElementById('btn-rm');
btnRm.onclick = function (e) {

let bookRemove = e.target.parentElement;
bookContainer.removeChild(bookRemove);
};

