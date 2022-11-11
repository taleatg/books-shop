export const body = document.querySelector('body');

export const bookDescription = (book) => {
    return `
        <div class="image">
            <img src=${book.imageLink} alt=${book.title}>
        </div>
        <div class="book-info">
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
        </div>
    `;
}
