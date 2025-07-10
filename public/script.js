var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 64,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 28,
    },
    640: {
      slidesPerView: 1.2,
      spaceBetween: 28,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 48,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 64,
    },
  },
});
