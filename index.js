import { addHeader } from './scripts/header.js';
import { addBooks } from './scripts/books.js';
import { addFooter } from './scripts/footer.js';
import { addBookToCart, openTheCart } from './scripts/cart.js';

addHeader();
await addBooks();
addFooter();
addBookToCart();
openTheCart();
