



let swiper = new Swiper(".homeSwiper", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
          slidesPerView: 2.15,
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

let swiper2 = new Swiper(".last_news_Swiper", {
  spaceBetween: 10,
  slidesPerView: 1.10,
  pagination: {
    el: ".swiper-pagination",
  },
});