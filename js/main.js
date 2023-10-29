import './burger.js';
import './swiper-config.js';
import './slider-config.js';


const header = document.querySelector('.header');
const body = document.querySelector('body');
window.addEventListener('scroll', () => {
  
  if (window.scrollY > 0) {
    body.style.paddingTop = `${header.offsetHeight}px`;
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
    body.style.paddingTop = `0`;
  }
});

const loadingButton = document.querySelector('#button-for-loading-demonstrate');
const BUTTON_LOADING_CLASS = 'button--loading';

const showButtonLoader = (button) => {
  button.classList.add(BUTTON_LOADING_CLASS);
  button.disabled = true;
};

const hideButtonLoader = (button) => {
  button.classList.remove(BUTTON_LOADING_CLASS);
  button.disabled = false;
};

const illustrateRequest = (endRequest) => {
  setTimeout(endRequest, 5000);
};

loadingButton.addEventListener('click', () => {
  showButtonLoader(loadingButton);

  illustrateRequest(hideButtonLoader.bind(null, loadingButton));
});