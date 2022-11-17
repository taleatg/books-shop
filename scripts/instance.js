export const body = document.querySelector('body');

export const bookDescription = (book) => {
    return `
        <div class="image-wrapper">
            <img class="image" src=${book.imageLink} alt='${book.title}' id='${JSON.stringify(book)}' draggable="true">
        </div>
        <div class="book-info">
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
        </div>
    `;
}

export const createOverlay = () => {
    const fragment = new DocumentFragment();
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    fragment.appendChild(overlay)
    body.append(fragment);
}
