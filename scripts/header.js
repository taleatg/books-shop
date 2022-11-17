import { body } from './instance.js';

function addHeader () {
    const fragment = new DocumentFragment();
    const header = document.createElement('header');

    header.classList.add('header');

    header.innerHTML = `
        <div class="header-wrapper">
            <a class="logo" href="../index.html">
                <img class="logo__icon" src="../assets/icon.ico" alt="icon">
                <h1>Books shop</h1>
            </a>
            <div class="invite">You are welcome to our bookstore</div>
            <div class="cart-wrapper">
                <div class="final-price">${localStorage.getItem('final price') || '$0'}</div>
                <div class="cart">
                    <div class="number-of-books">${localStorage.getItem('number of books') || '0'}</div>
                </div>
            </div>
        </div>
    `

    fragment.appendChild(header);
    body.appendChild(fragment);
}

export {
    addHeader
}
