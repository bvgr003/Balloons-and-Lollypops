// Select Carousel and Buttons
const carousel = document.getElementById('carousel');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

// Scroll Left Button Event
scrollLeftButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
});

// Scroll Right Button Event
scrollRightButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
});

// Enable Touch Gestures for Mobile
let startX;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const deltaX = startX - touch.clientX;
    carousel.scrollLeft += deltaX;
    startX = touch.clientX;
});
