const burger = document.querySelector('#burger');
const menu = document.querySelector('.header__menu-wrapper');
const closeButton = document.querySelector('.header__close-button');

const onBurgerClick = () => {
  menu.classList.add('header__menu-wrapper--opened');
};

const onCloseButtonClick = () => {
  menu.classList.remove('header__menu-wrapper--opened');
};

burger.addEventListener('click', onBurgerClick);
closeButton.addEventListener('click', onCloseButtonClick);
menu.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('header__menu')) {
    menu.classList.remove('header__menu-wrapper--opened');
  }
});