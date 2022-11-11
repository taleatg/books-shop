import {body, bookDescription} from './instance.js';

const selectedBooks = [];

function addBookToCart () {
    const booksWrapper = document.querySelector('.books-wrapper');

    booksWrapper.addEventListener('click', (e) => {
        let book = e.target.dataset.book;

        if (book) {
            addBook(JSON.parse(e.target.dataset.book));
        }
    })
}

function addBook (book) {
    const finalPrice = document.querySelector('.final-price');
    const numberOfBooks = document.querySelector('.number-of-books');

    const index = selectedBooks.reduce((res, el) => {
        res += (el.title === book.title ? 1 : 0);
        return res;
    }, 0);

    if (!index) {
        selectedBooks.push(book);
        finalPrice.innerHTML = '$' + (+finalPrice.textContent.slice(1) + book.price);
        numberOfBooks.innerHTML = String(selectedBooks.length);
    }
}

function openTheCart () {
    const cart = document.querySelector('.cart-wrapper');

    function createCartBlock () {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const basket = document.createElement('div');
        basket.classList.add('basket-wrapper');

        basket.innerHTML = `
            <div class="basket">
                <div class="selected-book">
                    ${selectedBooks.map(el => bookDescription(el)).join('')}
                </div>
                <div class="confirm-order">Confirm order</div>
            </div>
        `;

        body.append(overlay, basket);
    }

    cart.addEventListener('click', () => {
        createCartBlock();
    })
}

export {
    addBookToCart,
    openTheCart,
}
