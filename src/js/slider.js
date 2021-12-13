let position = 0;
const slidesToShow = 2;
const slidesToScroll = 2;
const container = document.querySelector(".slider__body");
const track = document.querySelector(".slider__track");
const prevSlide = document.querySelector("#prev-slide");
const nextSlide = document.querySelector("#next-slide");
const slides = document.querySelectorAll(".slider__item");
const slidesCount = slides.length;
const slideWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * slideWidth;
slides.forEach((slide) => {
	slide.style.minWidth = `${slideWidth}px` 
})
nextSlide.addEventListener("click", () => {
  const slidesLeft =
    slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth;
  position -=
    slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slideWidth;
  setPosition();
  checkBtns();
});
prevSlide.addEventListener("click", () => {
  const slidesLeft = Math.abs(position) / slideWidth;
  position +=
    slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slideWidth;
  setPosition();
  checkBtns();
});
const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
	prevSlide.disabled = position === 0;
	nextSlide.disabled = position <= -(slidesCount - slidesToShow) * slideWidth;
};
checkBtns();
