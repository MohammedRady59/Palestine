(() => {
  const slideContainar = document.querySelector('.slider-wrap');
  const slides = document.querySelectorAll('.slider-wrap .text');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let slideIndex = 0;
  let slideWidth = slideContainar.offsetWidth;
  console.log(slideWidth);
  slides.forEach(slide => {
    slide.style.width = slideWidth + 'px';
  });
  slideContainar.style.width = slides.length * slideWidth + 'px';
  next.addEventListener('click', function () {
    slideIndex == slides.length - 1 ? (slideIndex = 0) : slideIndex++;
    slideContainar.style.marginRight = -(slideIndex * slideWidth) + 'px';
  });
  prev.addEventListener('click', function () {
    slideIndex == 0 ? (slideIndex = slides.length - 1) : slideIndex--;
    slideContainar.style.marginRight = -(slideIndex * slideWidth) + 'px';
  });
})();
/* Active map  */
const navBar = document.querySelector('.nav');
const icon = document.querySelector('.icon');
icon.addEventListener("click",function(){
  navBar.classList.toggle("active")
})
