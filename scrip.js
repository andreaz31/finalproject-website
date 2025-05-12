let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const total = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    showImage(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    showImage(currentIndex);
});

showImage(currentIndex);
