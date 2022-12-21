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