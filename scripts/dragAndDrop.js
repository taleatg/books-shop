import {addBook} from './cart.js';

function dragAndDrop () {
    const books = document.querySelectorAll('.image');
    const basket = document.querySelector('.cart-wrapper');
    const booksArr = [...books];

    booksArr.forEach(book => {
        book.addEventListener('dragstart', (e) => {
            e.target.classList.add('drag');
            e.dataTransfer.setData('id', e.target.id);
        });

        book.addEventListener('dragend', (e) => {
            e.target.classList.remove('drag');
        })
    });

    basket.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    basket.addEventListener('drop', (e) => {
        const book = JSON.parse(e.dataTransfer.getData('id'));
        addBook(book);
    })
}

export {
    dragAndDrop,
}
