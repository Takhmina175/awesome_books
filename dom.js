class Dom {// eslint-disable-line no-unused-vars
  constructor() {
    this.bookContainer = document.querySelector('#ptext');
    this.bookList = document.querySelector('#book-list');
  }

  createBook({ title, author }) {
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

    this.bookList.appendChild(listItem);
    this.bookContainer.appendChild(this.bookList);
  }
}
