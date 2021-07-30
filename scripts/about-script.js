const aboutCardTemplate = document.getElementById('about__card-template');
const aboutDotTemplate = document.getElementById('about__dot-template');
const aboutCards = document.querySelector('.about__cards');
const dotsContainer = document.querySelector('.about__dots');
const rollToRightButton = document.querySelector('.about__roll-to-right');
const rollToLeftButton = document.querySelector('.about__roll-to-left');
const burgerListOfItems = document.querySelectorAll('.header__mobile-menu-item');
const aboutHeaderDropDown = document.getElementById("educationDropDown");

let sliderRoundIndex = 0;
const aboutCardsMassive = [
  {
    title: '11111111111',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: '22222222222222222',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: '333333333333333333',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: '44444444444444',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: '555555555555',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: '66666666666666',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: '77777',
    text: `dsfasdf`,
    date: '123213',
  },
];
let lastIndex = 2;
let firstIndex = 0;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function createCard(date,text,title) {
  clone = aboutCardTemplate.content.cloneNode(true);
  clone.querySelector(".about__card-date").textContent = date;
  clone.querySelector(".about__card-title").textContent = title;
  clone.querySelector(".about__card-text").textContent = text;
}

function createDot() {
  clone = aboutDotTemplate.content.cloneNode(true);
}

function addDot() {
  createDot();
  dotsContainer.append(clone);
}

function addCard(date, text, title) {
  createCard(date, text, title);
  aboutCards.append(clone);
}

for (let i = 0; i < aboutCardsMassive.length; i++) {
  addCard(aboutCardsMassive[i].date, aboutCardsMassive[i].text, aboutCardsMassive[i].title);
}

for (let i = 0; i < aboutCardsMassive.length-2; i++) {
  addDot();
}

const aboutDots = document.querySelectorAll('.about__dot');
aboutDots[0].classList.add('about__dot_active');

for (let i = 0; i < aboutDots.length; i++) {
  aboutDots[i].addEventListener('click', function () {
    let indexOfThisRound = Array.from(aboutDots).indexOf(this);
    let tempVar = sliderRoundIndex;
    if (indexOfThisRound >= sliderRoundIndex) {
      for (let j = 0; j < indexOfThisRound - tempVar; j++) {
        setTimeout(() => {
          rollRight();
        }, 210 * j);
      }
    } else {
      for (let j = 0; j < -indexOfThisRound + tempVar; j++) {
        setTimeout(() => {
          rollLeft();
        }, 210 * j);
      }
    }
  });
}

const addedCards = Array.from(document.querySelectorAll('.about__card-item'));
for (let i = 0; i < 3; i++) {
  addedCards[i].classList.add('about__card-item_show');
}

function rollRight() {
  if (lastIndex == addedCards.length-1) { } else {
    addedCards[firstIndex].classList.add('about__card-item_zeroOpacity');
    addedCards[firstIndex + 1].style.transform = 'translateX(' + -383 + 'px)';
    addedCards[firstIndex + 2].style.transform = 'translateX(' + -383 + 'px)';
    setTimeout(() => {
      addedCards[lastIndex + 1].classList.add('about__card-item_show');
      addedCards[lastIndex + 1].classList.add('about__card-item_zeroOpacity');
      addedCards[firstIndex].classList.remove('about__card-item_show');
      addedCards[firstIndex].classList.remove('about__card-item_zeroOpacity');
      addedCards[firstIndex + 1].classList.add('about__card-item_zeroTransition');
      addedCards[firstIndex + 2].classList.add('about__card-item_zeroTransition');
      addedCards[firstIndex + 1].style.transform = '';
      addedCards[firstIndex + 2].style.transform = '';
      setTimeout(() => {
        addedCards[firstIndex + 1].classList.remove('about__card-item_zeroTransition');
        addedCards[firstIndex + 2].classList.remove('about__card-item_zeroTransition');
        addedCards[lastIndex + 1].classList.remove('about__card-item_opacityTransition');
        lastIndex++;
        firstIndex++;
        sliderRoundIndex++;
      },100);
      addedCards[lastIndex + 1].classList.add('about__card-item_opacityTransition');
      addedCards[lastIndex + 1].classList.remove('about__card-item_zeroOpacity');
      aboutDots[firstIndex].classList.remove('about__dot_active');
      aboutDots[firstIndex + 1].classList.add('about__dot_active');

    }, 100);
  }
}

function rollLeft() {
  if (firstIndex == 0) { } else {
    addedCards[lastIndex].classList.add('about__card-item_zeroOpacity');
    addedCards[firstIndex].style.transform = 'translateX(' + 383 + 'px)';
    addedCards[firstIndex + 1].style.transform = 'translateX(' + 383 + 'px)';
    setTimeout(() => {
      addedCards[firstIndex - 1].classList.add('about__card-item_show');
      addedCards[firstIndex - 1].classList.add('about__card-item_zeroOpacity');
      addedCards[lastIndex].classList.remove('about__card-item_show');
      addedCards[lastIndex].classList.remove('about__card-item_zeroOpacity');
      addedCards[firstIndex].classList.add('about__card-item_zeroTransition');
      addedCards[firstIndex + 1].classList.add('about__card-item_zeroTransition');
      addedCards[firstIndex].style.transform = '';
      addedCards[firstIndex + 1].style.transform = '';
      setTimeout(() => {
        addedCards[firstIndex].classList.remove('about__card-item_zeroTransition');
        addedCards[firstIndex + 1].classList.remove('about__card-item_zeroTransition');
        addedCards[firstIndex - 1].classList.remove('about__card-item_opacityTransition');
        lastIndex--;
        firstIndex--;
        sliderRoundIndex--;
      }, 100);
      addedCards[firstIndex - 1].classList.add('about__card-item_opacityTransition');
      addedCards[firstIndex - 1].classList.remove('about__card-item_zeroOpacity');
      aboutDots[firstIndex].classList.remove('about__dot_active');
      aboutDots[firstIndex - 1].classList.add('about__dot_active');
    }, 100);
  }
}
window.addEventListener('load', function () {

  let touchsurface = document.getElementById('about__touchsurface');
    let startX;
  let startY;
  let dist;
  let threshold = 150; // минимальное расстояние для swipe

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
    e.preventDefault();
  }, false);

  touchsurface.addEventListener('touchmove', function (e) {
    e.preventDefault() // отключаем стандартную реакцию скроллинга
  }, false)

  touchsurface.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    handleswipe(dist);
    e.preventDefault();
  }, false)

}, false)

aboutHeaderDropDown.addEventListener('click', function () {
  document.querySelector(".header__educationdropdown-content").classList.toggle("header__dropbtn_show");
  for (let i = 0; i < 7; i++) {
    if (i == 3) {
      burgerListOfItems[i].style.fontWeight = burgerListOfItems[i].style.fontWeight != 600 ? 600 : 400 ;
      continue;
    }
    burgerListOfItems[i].style.opacity = burgerListOfItems[i].style.opacity == 0.5 ? 1 : 0.5;
  }
});
rollToRightButton.addEventListener('click', rollRight);
rollToLeftButton.addEventListener('click', rollLeft);
