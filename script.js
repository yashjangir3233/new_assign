// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobile-menu');

// hamburger.addEventListener('click', () => {
//     mobileMenu.classList.toggle('show');
// });

var swiper = new Swiper(".services-slider-container",{
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // when window width is >= 1120px
        1120: {
            slidesPerView: 3,
            // slidesPerGroup: 3,
        },
        // when window width is >= 768px (tablet)
        768: {
            slidesPerView: 2,
            // slidesPerGroup: 2,
        },
    },
});

var swiper = new Swiper(".testimonial-container",{
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // when window width is >= 1120px
        1120: {
            slidesPerView: 3,
            // slidesPerGroup: 3,
        },
        // when window width is >= 768px (tablet)
        768: {
            slidesPerView: 2,
            // slidesPerGroup: 2,
        },
    },
});