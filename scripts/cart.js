import { body, bookDescription, createOverlay } from './instance.js';

let selectedBooks = JSON.parse(localStorage.getItem('selected books')) || [];

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

        localStorage.setItem('selected books', JSON.stringify(selectedBooks));
        localStorage.setItem('final price', finalPrice.textContent);
        localStorage.setItem('number of books', numberOfBooks.textContent);
    }
}

function openTheCart () {
    const cart = document.querySelector('.cart-wrapper');

    cart.addEventListener('click', () => {
        if (selectedBooks.length) {
            body.classList.add('no-scrolling');
            createOverlay();
            createCartBlock();
        } else {
            const fragment = new DocumentFragment();
            const div = document.createElement('div');

            div.innerHTML = 'Add the book to cart';
            div.classList.add('add-book');

            fragment.appendChild(div);
            cart.appendChild(fragment);

            setTimeout(() => {
                cart.removeChild(div);
            }, 1000);
        }
    })
}

function createCartBlock () {
    const overlay = document.querySelector('.overlay');
    const basketFragment = new DocumentFragment();
    const basketWrapper = document.createElement('div');
    basketWrapper.classList.add('basket-wrapper');

    basketWrapper.innerHTML = `
        <div class="basket">
            <div class="basket__title">Order books</div>
            <div class="selected-books">
                ${selectedBooks.map(el => `
                    <div class="book">
                        <div class="close" data-book-title='${el.title}'>x</div>
                        <div class="price">$${el.price}</div>
                        ${bookDescription(el)}
                    </div>
                `).join('')}
            </div>
            <div class="confirm-or-cancel"></div>
        </div>
    `;

    if (document.querySelector('.basket-wrapper')) {
        body.removeChild(document.querySelector('.basket-wrapper'));
    }

    basketFragment.append(basketWrapper);
    body.append(basketFragment);

    const fragment = new DocumentFragment();
    const confirmOrCancel = document.querySelector('.confirm-or-cancel');
    const closeCart = document.createElement('div');
    closeCart.innerHTML = 'Close cart';
    closeCart.classList.add('close-cart');

    const confirmOrder = document.createElement('div');
    confirmOrder.innerHTML = 'Confirm order';
    confirmOrder.classList.add('confirm-order');

    closeCart.addEventListener('click', () => {
        body.removeChild(basketWrapper);
        body.removeChild(overlay);
        body.classList.remove('no-scrolling');
    })

    confirmOrder.addEventListener('click', () => {
        location.href = '../delivery/delivery.html';
    })

    fragment.append(closeCart, confirmOrder);
    confirmOrCancel.appendChild(fragment);
    deleteBook();
}

function deleteBook () {
    const booksInCart = document.querySelector('.selected-books');
    const finalPrice = document.querySelector('.final-price');
    const numberOfBooks = document.querySelector('.number-of-books');

    booksInCart.addEventListener('click', (e) => {

        if (e.target?.dataset.bookTitle) {
            selectedBooks = selectedBooks.filter(el => {
                if (el.title !== e.target?.dataset.bookTitle) {
                    return el;
                } else {
                    finalPrice.innerHTML = '$' + (+finalPrice.textContent.slice(1) - el.price);
                    numberOfBooks.innerHTML = String(selectedBooks.length - 1);

                    localStorage.setItem('final price', finalPrice.textContent);
                    localStorage.setItem('number of books', numberOfBooks.textContent);
                }
            });

            localStorage.setItem('selected books', JSON.stringify(selectedBooks));

            if (+numberOfBooks.textContent === 0) {
                const overlay = document.querySelector('.overlay');
                const basketWrapper = document.querySelector('.basket-wrapper');

                body.removeChild(basketWrapper);
                body.removeChild(overlay);
                body.classList.remove('no-scrolling');
            } else {
                createCartBlock();
            }
        }
    })
}

export {
    addBookToCart,
    addBook,
    openTheCart,
}
