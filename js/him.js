const sliderElem = document.querySelector(".slider");

const cardWidth = 310;
let currentPosition = 0;

function slideLeft() {
    currentPosition += cardWidth;  //cdurrentPosition = currentPosition + cardWidth;
    if(currentPosition > 0) {
        currentPosition = 0;
    }
    updateSliderPosition();
}

function slideRight() {
    const maxPosition = sliderElem.scrollWidth - sliderElem.clientWidth;
    currentPosition += cardWidth;  //cdurrentPosition = currentPosition + cardWidth
    if(currentPosition < -maxPosition) {
        currentPosition = -maxPosition;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    sliderElem.style.transform = `translate(${currentPosition}px)`;
}