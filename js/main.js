/*burger-menu*/

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('nav');

navBtn.onclick = function () {
    navBtn.classList.toggle('active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
}

/*Slider*/

new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.news__btn-next',
        prevEl: '.news__btn-prev',
    },
    spaceBetween: 20,
    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});
