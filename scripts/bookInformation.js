const body = document.querySelector('body');

function addBookInformation (book) {
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="close">
            <img src="../assets/svg/close.svg" alt="close">
        </div>
        <div class="author">${book.author}</div>
        <div class="title">${book.title}</div>
        <div class="image">
            <img src=${book.imageLink} alt=${book.title}>
        </div>
        <div class="description">${book.description}</div>
    `;

    div.classList.add('book-information');
    body.appendChild(div);

    deleteBookInformation(div);
}

function deleteBookInformation (bookInfo) {
    const close = document.querySelector('.close');

    close.addEventListener('click', () => {
        body.removeChild(bookInfo);
    })
}

export {
    addBookInformation
}
