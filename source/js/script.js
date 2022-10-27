const header = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
// const body = document.querySelector('body');

// function bodyHiddenToggle() {
//   if (body !== 'body') {
//     body.classList.toggle('page__body--hidden');
//   };
// };

function showHeader() {
  header.classList.toggle('page-header--open');
};

function onHeaderClick() {
  showHeader();
};

burger.addEventListener('click', onHeaderClick);
