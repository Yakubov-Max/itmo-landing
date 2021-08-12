// найдем слайдер на странице и кнопки внутри него
const sliderPublications = document.querySelector('.slider');
let slidesPublications = []; // перенести в adding-cards-publications.js
const buttonPublicationsLeft = sliderPublications.querySelector('#left-arrow');
const buttonPublicationsRight = sliderPublications.querySelector('#right-arrow');
let dotsPublications = [];
const dotsContainerPublications = sliderPublications.querySelector('.slider__dots-container');

/* Индекс слайда по умолчанию */
let slidePublicationsIndex = 0;

window.addEventListener('load', () => {
  setSlides();
  addDots();
  setDots();
  buttonPublicationsRight.addEventListener('click', plusSlide);
  buttonPublicationsLeft.addEventListener('click', minusSlide);

  showSlides(slidePublicationsIndex);
}, true);

window.addEventListener('resize', () => {
  setSlides();
  addDots();
  setDots();
  if (slidePublicationsIndex > slidesPublications.length) {
    slidePublicationsIndex = 0;
  }
  showSlides(slidePublicationsIndex);
}, true);


function setSlides() {
  slidesPublications = sliderPublications.querySelectorAll('.slider__page');
}

function addDots() {
  dotsContainerPublications.innerHTML = '';

  // dotsContainerPublications.childNodes.forEach(item => {
  //   item.remove();
  // });
  const dotsTemplate = sliderPublications.querySelector('#dots-template').content;
  for (let dotsIndex = 0; dotsIndex < slidesPublications.length; dotsIndex++) {
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

function setDots() {
  dotsPublications = dotsContainerPublications.querySelectorAll('.slider__dots');
}


/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slidePublicationsIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slidePublicationsIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slidePublicationsIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  if (n >= slidesPublications.length) {
    slidePublicationsIndex = 0;
  }
  if (n < 0) {
    slidePublicationsIndex = slidesPublications.length - 1;
  }
  for (i = 0; i < slidesPublications.length; i++) {
    slidesPublications[i].classList.add('slider__page_hidden');
  }
  for (i = 0; i < dotsPublications.length; i++) {
    dotsPublications[i].classList.remove('slider__dots_active');
  }
  slidesPublications[slidePublicationsIndex].classList.remove('slider__page_hidden');
  if (dotsPublications.length > 0) {
    dotsPublications[slidePublicationsIndex].classList.add('slider__dots_active');
  }
}

/*Добавление реакции на свайп*/
window.addEventListener('load', function () {

  let touchsurface = document.getElementById('slider-publications');
  let startX;
  let startY;
  let dist;
  let threshold = 150; // минимальное расстояние для swipe
  function rollRight() {
    if (slidePublicationsIndex == slidesPublications.length - 1) {
      slidesPublications[slidePublicationsIndex].classList.add('slider__page_hidden');
      slidesPublications[0].classList.remove('slider__page_hidden');
      dotsPublications[slidePublicationsIndex].classList.remove('slider__dots_active');
      dotsPublications[0].classList.add('slider__dots_active');
      slidePublicationsIndex = 0;
    } else {
      slidesPublications[slidePublicationsIndex].classList.add('slider__page_hidden');
      slidesPublications[slidePublicationsIndex + 1].classList.remove('slider__page_hidden');
      dotsPublications[slidePublicationsIndex].classList.remove('slider__dots_active');
      dotsPublications[slidePublicationsIndex + 1].classList.add('slider__dots_active');
      slidePublicationsIndex++;
    }
  }
  function rollLeft() {
    if (slidePublicationsIndex == 0) {
      slidesPublications[0].classList.add('slider__page_hidden');
      slidesPublications[slidesPublications.length - 1].classList.remove('slider__page_hidden');
      dotsPublications[slidePublicationsIndex].classList.remove('slider__dots_active');
      dotsPublications[slidesPublications.length - 1].classList.add('slider__dots_active');
      slidePublicationsIndex = slidesPublications.length - 1;
    } else {
      slidesPublications[slidePublicationsIndex].classList.add('slider__page_hidden');
      slidesPublications[slidePublicationsIndex - 1].classList.remove('slider__page_hidden');
      dotsPublications[slidePublicationsIndex].classList.remove('slider__dots_active');
      dotsPublications[slidePublicationsIndex - 1].classList.add('slider__dots_active');
      slidePublicationsIndex--;
    }
  }
  function handleswipe(isrightswipe) {
    if (isrightswipe > 150) {
      rollLeft();
    } else if (isrightswipe < -150) {
      rollRight();
    }
  };

  touchsurface.addEventListener('touchstart', function (e) {
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    //e.preventDefault();
  }, false);

  touchsurface.addEventListener('touchmove', function (e) {
    //e.preventDefault() // отключаем стандартную реакцию скроллинга
  }, false)

  touchsurface.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    handleswipe(dist);
    //e.preventDefault();
  }, false)

}, false)
