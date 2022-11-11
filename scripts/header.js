import { body } from './instance.js';

function addHeader () {
    const header = document.createElement('header');

    header.classList.add('header');

    header.innerHTML = `
        <div class="header-wrapper">
            <div class="logo">
                <img class="logo__icon" src="../assets/icon.ico" alt="icon">
                <h1>Books shop</h1>
            </div>
            <div class="cart-wrapper">
                <div class="final-price">$0</div>
                <div class="cart">
                    <div class="number-of-books">0</div>
                </div>
            </div>
        </div>
    `

    body.appendChild(header);
}

export {
    addHeader
}
