/**
 * A script for carousel which adds:
 * Time interval 
 * Extra colors
 * Animation like sliding effect
 */
const mainCarouselElement = document.querySelector('#mainCarousel');
const carouselIndicators = mainCarouselElement.querySelectorAll(".carousel-indicators button span");
let interval;
const carousel = new bootstrap.Carousel(mainCarouselElement);

window.addEventListener('load', () => {
    progressCarousel(0);
});

mainCarouselElement.addEventListener('slide.bs.carousel', (e) => {
    let index = e.to;
    progressCarousel(index);
});

function progressCarousel(carouselIndex) {
    let sliderTexts = mainCarouselElement.getElementsByClassName('slider-text');
    sliderTexts[carouselIndex].classList.add('slider-active');
    for (let j = 0; j < 4; j++) {
        if (j != carouselIndex) {
            sliderTexts[j].classList.remove('slider-active');
        }
    }
    let i = 0;
    for (const indicator of carouselIndicators) {
        indicator.style.width = 0;
    }
    clearInterval(interval);
    carousel.pause();
    interval = setInterval(() => {
        i++;
        mainCarouselElement.querySelector(".carousel-indicators .active span").style.width = i + '%';
        if (i == 100)
            carousel.next();
    }, 50);

}

/**
 * A script for navbar which sets the current page
 */
var home = document.getElementById('home');
var about = document.getElementById('about');
var deals = document.getElementById('deals');
var reservations = document.getElementById('reservations');
var book = document.getElementById('book');

home.addEventListener('click', () => {
    setCurrent('');
});
about.addEventListener('click', () => {
    setCurrent('about');
});
deals.addEventListener('click', () => {
    setCurrent('deals');
});
reservations.addEventListener('click', () => {
    setCurrent('reservations');
});
book.addEventListener('click', () => {
    setCurrent('book');
});

function setCurrent(path) {
    switch (path) {
        case '':
            home.classList.add('current');
            about.classList.remove('current');
            deals.classList.remove('current');
            reservations.classList.remove('current');
            book.classList.remove('current');
            break;
        case 'about':
            home.classList.remove('current');
            about.classList.add('current');
            deals.classList.remove('current');
            reservations.classList.remove('current');
            book.classList.remove('current');
            break;
        case 'deals':
            home.classList.remove('current');
            about.classList.remove('current');
            deals.classList.add('current');
            reservations.classList.remove('current');
            book.classList.remove('current');
            break;
        case 'reservations':
            home.classList.remove('current');
            about.classList.remove('current');
            deals.classList.remove('current');
            reservations.classList.add('current');
            book.classList.remove('current');
            break;
        case 'book':
            home.classList.remove('current');
            about.classList.remove('current');
            deals.classList.remove('current');
            reservations.classList.remove('current');
            book.classList.add('current');
            break;
    }
}