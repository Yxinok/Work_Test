const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    burger.classList.toggle('burger_active');
    header.classList.toggle('head_line');
});