// Image Carousel Functionality
let currentIndex = 0;

function showSlide(carousel, index) {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const totalImages = images.length;
    
    if (index < 0) {
        index = totalImages - 1;
    } else if (index >= totalImages) {
        index = 0;
    }
    
    imagesContainer.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;
}

function nextSlide(button) {
    const carousel = button.closest('.carousel');
    showSlide(carousel, currentIndex + 1);
}

function prevSlide(button) {
    const carousel = button.closest('.carousel');
    showSlide(carousel, currentIndex - 1);
}

// Auto Slide
setInterval(() => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        showSlide(carousel, currentIndex + 1);
    });
}, 5000);
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('show');
}