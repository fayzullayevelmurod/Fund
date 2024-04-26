



let swiper = new Swiper(".homeSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        300: {
          slidesPerView: 2.20,
          spaceBetween: 10,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
    },
});