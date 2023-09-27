document.addEventListener("DOMContentLoaded", function(){

alert("test")
console.log("console log test")

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const showMoreButton = document.getElementById('showMoreBtn');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0;
let showingMoreImages = false;

// Function to update the carousel display
function updateCarousel() {
    if (!showingMoreImages) {
        carouselSlide.style.transform = `translateX(${-currentIndex * (100 / 4)}%)`;
    } else {
        carouselSlide.style.transform = `translateX(0%)`;
    }
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 4) {
        currentIndex++;
        updateCarousel();
    }
});

// Event listener for the "Show More" button
showMoreButton.addEventListener('click', () => {
    showingMoreImages = !showingMoreImages;
    updateCarousel();
});

// Initialize the carousel
updateCarousel();



// // Get a reference to the button element by its ID
// const logButton = document.querySelector("#logButton");

// // Add a click event listener to the button
// logButton.addEventListener("click", function() {
//     console.log("Button clicked! Your message goes here.");
// });

function testFunction () {
    console.log("test")
}

let buttonTest = document.getElementById("logButton");

buttonTest.addEventListener("click", testFunction);

});