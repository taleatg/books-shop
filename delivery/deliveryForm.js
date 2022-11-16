import { createOverlay } from '../scripts/instance.js';

function showPrice () {
    const finalPrice = document.querySelector('.final-price');
    const numberOfBooks = document.querySelector('.number-of-books');

    finalPrice.innerHTML = localStorage.getItem('final price') || '$0';
    numberOfBooks.innerHTML = localStorage.getItem('number of books') || 0;
}

function disabledSubmit () {
    showPrice();
    const inputs = document.querySelectorAll('input');
    const submit = document.querySelector('.submit');
    let inputsArr = [...inputs];

    inputsArr = inputsArr.filter(el => el.hasAttribute('required'));

    inputsArr.forEach(input => {

        input.addEventListener('focusout', () => {
            !input.value || !input.checkValidity()
                ? input.classList.add('focusout')
                : input.classList.remove('focusout');
        })

        input.addEventListener('input', () => {
            if (inputsArr.some(el => !el.checkValidity())) {
                submit.classList.add('disabled');
            } else {
                submit.classList.remove('disabled');
                submit.classList.add('confirm-order');
                submit.removeAttribute('disabled');
            }
        })
    })
}

function minDate () {
    const date = document.querySelector('.delivery-date');
    const today = new Date();
    let dd = today.getDate() + 1;
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    const lastDayDate = (new Date(yyyy, mm, 0)).getDate();

    if (dd > lastDayDate) {
        dd = 1;
        mm += 1;

        if (mm === 13) {
            mm = 1;
            yyyy += 1
        }
    }

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    date.setAttribute('min', `${yyyy}-${mm}-${dd}`);
}

function maxNumberOfCheckboxes () {
    const checkboxes = document.querySelectorAll('.checkbox');
    const checkboxesArr = [...checkboxes];

    checkboxesArr.forEach(el => {
        el.addEventListener('change', () => {
            const length = checkboxesArr.filter(checkbox => checkbox.checked).length;

            el.checked = !(length > 2) && el.checked;
        })
    });
}

function summarizedInformation () {
    const body = document.querySelector('body');
    const form = document.querySelector('.form');

    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        const fragment = new DocumentFragment();
        const div = document.createElement('div');
        const formData = new FormData(form);
            div.classList.add('summarized-information');

        div.innerHTML = `
            <div class="delivery-title">The order created</div>
            <div class="delivery">
                <div class="delivery__item"><b>Date:</b> ${formData.get('delivery date').split('-').reverse().join('.')}</div>
                <div class="delivery__item"><b>Delivery address:</b> ${formData.get('street')} street house ${formData.get('house')} flat ${formData.get('flat')}</div>
                <div class="delivery__item"><b>Customer:</b> ${formData.get('first name')} ${formData.get('last name')}</div>
                <div class="delivery__item"><b>Payment:</b> ${localStorage.getItem('final price')}</div>
            </div>
            <div class="button-close">Close</div>
        `;

        localStorage.setItem('selected books', JSON.stringify([]));

        localStorage.setItem('final price', '$0');
        localStorage.setItem('number of books', '0');

        createOverlay();
        fragment.appendChild(div);
        body.appendChild(fragment);
        closeFormPage();
    })
}

function closeFormPage () {
    const close = document.querySelector('.button-close');

    close.addEventListener('click', () => {
        location.href = '../index.html';
    })
}

disabledSubmit();
minDate();
maxNumberOfCheckboxes();
summarizedInformation();
