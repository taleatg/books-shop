function addBooks () {
    const body = document.querySelector('body');
    const div = document.createElement('div');

    fetch('/scripts/books.json')
        .then(res => res.json())
        .then(data => data.forEach(el => div.appendChild(createBook(el))));

    div.classList.add('books-wrapper');
    body.appendChild(div);
}

function createBook (book) {
    const bookWrapper = document.createElement('div');
    bookWrapper.classList.add('book')

    bookWrapper.innerHTML = `
        <div class="show-more">Show more</div>
        <div class="image">
            <img src=${book.imageLink} alt=${book.title}>
        </div>
        <div class="book-info">
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
        </div>
        <div class="price-block">
            <div class="price">$${book.price}</div>
            <div class="cart">
                <img src="../assets/svg/cart.svg" alt="cart">
            </div>
        </div>
    `

    return bookWrapper;
}

export {
    addBooks
};
