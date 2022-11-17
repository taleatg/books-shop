import { addBookInformation } from './bookInformation.js';
import { bookDescription, body } from './instance.js';
import { dragAndDrop } from './dragAndDrop.js';

async function addBooks () {
    const fragment = new DocumentFragment();
    const div = document.createElement('div');

    await fetch('/books-shop/scripts/books.json')
        .then(res => res.json())
        .then(data => data.forEach(el => div.appendChild(createBook(el))));

    div.classList.add('books-wrapper');
    fragment.appendChild(div);
    body.appendChild(fragment);
    dragAndDrop();
}

function createBook (book) {
    const fragment = new DocumentFragment();
    const bookWrapper = document.createElement('div');
    bookWrapper.classList.add('book');

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
    fragment.appendChild(bookWrapper);
    return fragment;
}

export {
    addBooks,
    bookDescription,
};
