// найдем слайдер на странице и кнопки внутри него
const sliderPublications = document.querySelector('#slider-publications');
const slide = sliderPublications.querySelectorAll('.slider__page');
const buttonPblctLeft = sliderPublications.querySelector('#left-arrow');
const buttonPblctRight = sliderPublications.querySelector('#right-arrow');
let dots = [];
const dotsContainerPublications = sliderPublications.querySelector('.slider__dots-container');

window.onload = function () {
  addDots();
  getDots();
  buttonPblctRight.addEventListener('click', plusSlide);
  buttonPblctLeft.addEventListener('click', minusSlide);
}

function addDots() {
  const dotsTemplate = sliderPublications.querySelector('#dots-template').content;
  for (let dotsIndex = 0; dotsIndex < slide.length; dotsIndex++) {
    const dot = dotsTemplate.querySelector('.slider__dots').cloneNode(true);
    if (dotsIndex === 0) {
      dot.classList.add('slider__dots_active');
    }
    dotsContainerPublications.append(dot);
    dot.addEventListener('click', () => {
      currentSlide(dotsIndex);
    });
  }
}

function getDots() {
  dots = dotsContainerPublications.querySelectorAll('.slider__dots');
}

/* Индекс слайда по умолчанию */
let slideIndex = 0;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  if (n >= slide.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slide.length - 1;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].classList.add('slider__page_hidden');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('slider__dots_active');
  }
  slide[slideIndex].classList.remove('slider__page_hidden');
  if (dots.length > 0) {
    dots[slideIndex].classList.add('slider__dots_active');
  }
}
