document.addEventListener("DOMContentLoaded", function(){

alert("test")
console.log("console log test")

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0;

// Function to update the carousel display
function updateCarousel() {
    carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {

    console.log("test")
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {

    console.log("test")
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
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