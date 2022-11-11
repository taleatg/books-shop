import { addBookInformation } from './bookInformation.js';
import { bookDescription, body } from './instance.js';

function addBooks () {
    const div = document.createElement('div');

    fetch('/scripts/books.json')
        .then(res => res.json())
        .then(data => data.forEach(el => div.appendChild(createBook(el))));

    div.classList.add('books-wrapper');
    body.appendChild(div);
}

function createBook (book) {
    const bookWrapper = document.createElement('div');
    bookWrapper.classList.add('book')

    const showMore = document.createElement('div');
    showMore.classList.add('show-more');
    showMore.innerHTML= 'Show more';

    showMore.addEventListener('click', () => {
        addBookInformation(book);
    });

    bookWrapper.innerHTML = bookDescription(book) + `
        <div class="price-block">
            <div class="price">$${book.price}</div>
            <div class="cart" data-book='${JSON.stringify(book)}'></div>
        </div>
    `;

    bookWrapper.prepend(showMore);
    return bookWrapper;
}

export {
    addBooks,
    bookDescription,
};
