import {body, bookDescription, createOverlay} from './instance.js';

function addBookInformation (book) {
    const fragment = new DocumentFragment();
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="close">x</div>        
        ${bookDescription(book)}
        <div class="description">${book.description}</div>
    `;

    createOverlay();
    div.classList.add('book-information');
    body.classList.add('no-scrolling');
    fragment.appendChild(div);
    body.appendChild(fragment);

    deleteBookInformation(div);
}

function deleteBookInformation (bookInfo) {
    const close = document.querySelector('.close');
    const overlay = document.querySelector('.overlay');

    close.addEventListener('click', () => {
        body.removeChild(bookInfo);
        body.removeChild(overlay);
        body.classList.remove('no-scrolling');
    })
}

export {
    addBookInformation
}
