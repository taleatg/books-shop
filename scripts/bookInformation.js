import { body, bookDescription } from './instance.js';

function addBookInformation (book) {
    const div = document.createElement('div');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    div.innerHTML = `
        <div class="close">
            <img src="../assets/svg/close.svg" alt="close">
        </div>        
        ${bookDescription(book)}
        <div class="description">${book.description}</div>
    `;

    div.classList.add('book-information');
    body.append(overlay, div);

    deleteBookInformation(div);
}

function deleteBookInformation (bookInfo) {
    const close = document.querySelector('.close');
    const overlay = document.querySelector('.overlay');

    close.addEventListener('click', () => {
        body.removeChild(bookInfo);
        body.removeChild(overlay);
    })
}

export {
    addBookInformation
}
