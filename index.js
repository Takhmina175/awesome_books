const list = [];
const inputEl = document.querySelectorAll('input')


const addBtn = document.getElementById('add-btn');

addBtn.onclick = function () {
};
function addBook() {
const title = document.getElementById("title").value;
const author = document.getElementById("author").value; 
  const arrobj = ({ title, author });
  list.push(arrobj);
}
