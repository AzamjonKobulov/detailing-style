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
});
