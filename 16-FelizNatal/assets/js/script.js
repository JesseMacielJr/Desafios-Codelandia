const btnMobile = document.querySelector('[data-menu="button"]');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header-menu');

function handleBtn() {
    btnMobile.classList.toggle('active');
    header.classList.toggle('active');
    headerNav.classList.toggle('active');
}

btnMobile.addEventListener('click', handleBtn);

