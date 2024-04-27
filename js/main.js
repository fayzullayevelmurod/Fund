let burger_btn = document.querySelector('.burger_btn');
let header_in = document.querySelector('.header_in');
let media_menu = document.querySelector('.media_menu');

burger_btn.addEventListener('click', () => {
  header_in.classList.toggle('active');
  media_menu.classList.toggle('active');
})

media_menu.addEventListener('click', () => {
  header_in.classList.remove('active');
  media_menu.classList.remove('active');
})


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