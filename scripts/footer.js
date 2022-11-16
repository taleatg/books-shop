import { body } from './instance.js';

function addFooter () {
    const fragment = new DocumentFragment();
    const footer = document.createElement('footer');

    footer.classList.add('footer');
    footer.innerHTML = `
        <div class="footer-wrapper">
            <div>© 2022</div>
            <div class="links">
                <a href="https://github.com/taleatg" target="_blank" class="links__item">
                    <img src="../assets/image/github.png" alt="github" class="github">
                    <div>Tatsiana Dashuk</div>
                </a>
                <a href="https://rs.school/js-en/" target="_blank" class="links__item">
                    <img src="../assets/image/rsschool.png" alt="rs-school" class="rs-school">
                </a>
            </div>
        </div>
    `

    fragment.appendChild(footer);
    body.appendChild(fragment);
}

export {
    addFooter
}
