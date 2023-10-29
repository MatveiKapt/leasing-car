const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  speed: 1800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.carousel-nav-buttons__button--next',
    prevEl: '.carousel-nav-buttons__button--prev',
  },
});

const animatedCircle = document.querySelector('.animated-circle animate');

swiper.on('slideChange', () => {
  if (animatedCircle) {

    animatedCircle.beginElement();
  }
})


