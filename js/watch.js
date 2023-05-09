const sliderContainer = document.querySelector(".slider-container");
const sliderImages = document.querySelectorAll(".slider-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function goToSlide(index) {
  sliderContainer.style.transform = `translateX(-${index * 25}%)`;
  currentIndex = index;
}

function goToPrev() {
  if (currentIndex === 0) {
    goToSlide(sliderImages.length - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

function goToNext() {
  if (currentIndex === sliderImages.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
}

prevBtn.addEventListener("click", goToPrev);
nextBtn.addEventListener("click", goToNext);

// екінші слайдер

// const slider = document.querySelector(".slider");
// const slides = slider.querySelectorAll(".slide");
// const prevButton = slider.querySelector(".prev");
// const nextButton = slider.querySelector(".next");
// let currentIndex2 = 0;

// function showSlide(index) {
//   slides[currentIndex2].classList.remove("active");
//   slides[index].classList.add("active");
//   currentIndex2 = index;
// }

// prevButton.addEventListener("click", () => {
//   let index = currentIndex2 - 1;
//   if (index < 0) {
//     index = slides.length - 1;
//   }
//   showSlide(index);
// });

// nextButton.addEventListener("click", () => {
//   let index = currentIndex2 + 1;
//   if (index >= slides.length) {
//     index = 0;
//   }
//   showSlide(index);
// });

// showSlide(currentIndex2);
