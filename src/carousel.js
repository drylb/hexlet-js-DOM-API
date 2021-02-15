/* eslint-disable no-undef */

export default () => {
  // BEGIN (write your solution here)
  const carouselControlsNext = document.querySelectorAll('a.carousel-control-next');
  const carouselControlsPrev = document.querySelectorAll('a.carousel-control-prev');
  carouselControlsNext.forEach((control) => {
    control.addEventListener('click', (e) => {
      e.preventDefault();
      const currentActiveSlide = e.target.parentElement.querySelector('div.active');
      currentActiveSlide.classList.remove('active');
      const nextActiveSlide = currentActiveSlide.nextElementSibling === null
        ? currentActiveSlide.parentElement.firstElementChild
        : currentActiveSlide.nextElementSibling;
      nextActiveSlide.classList.add('active');
    });
  });
  carouselControlsPrev.forEach((control) => {
    control.addEventListener('click', (e) => {
      e.preventDefault();
      const currentActiveSlide = e.target.parentElement.querySelector('div.active');
      currentActiveSlide.classList.remove('active');
      const nextActiveSlide = currentActiveSlide.previousElementSibling === null
        ? currentActiveSlide.parentElement.lastElementChild
        : currentActiveSlide.previousElementSibling;
      nextActiveSlide.classList.add('active');
    });
  });
  // END
};
