
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const arrowRight = document.querySelector(".icon-right");
const arrowLeft = document.querySelector(".icon-left")


let currentlyTransport = 0;
const scrollWidth = slider.scrollWidth
const clientWidth = sliderContainer.clientWidth
const maxScroll = scrollWidth - clientWidth
const transport = 500;

const leftGap = (clientWidth-scrollWidth) / 2

// arrowRight.addEventListener("click", () => {

// if(currentlyTransport < maxScroll) {
//     currentlyTransport -= transport
// }

// if(-currentlyTransport > maxScroll) {
//     currentlyTransport += 
// }

//      slider.style.transform = `translateX(${currentlyTransport}px)`

// })

// arrowLeft.addEventListener("click", () => {

// currentlyTransport -= transport


// slider.style.transform = `translateX(${currentlyTransport}px)`
// })

arrowRight.addEventListener("click", () => {
    if (currentlyTransport < maxScroll) {
        currentlyTransport += transport;

        if (currentlyTransport > maxScroll) {
            currentlyTransport = maxScroll;
        }

        slider.style.transform = `translateX(-${currentlyTransport}px)`;
    }
});

arrowLeft.addEventListener("click", () => {
    if (currentlyTransport > 0) {
        currentlyTransport -= transport;

        if (currentlyTransport < 0) {
            currentlyTransport = 0;
        }

        slider.style.transform = `translateX(-${currentlyTransport}px)`;
    }
});



"use strict";
 isim = 0;   



