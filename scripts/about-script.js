const aboutTemplate = document.getElementById('about__card-template');
const aboutCards = document.querySelector('.about__cards');
const aboutDots = document.querySelectorAll('.about__dot');
const rollToRightButton = document.querySelector('.about__roll-to-right');
const rollToLeftButton = document.querySelector('.about__roll-to-left');
const sliderRounds = document.querySelectorAll('.about__dot');
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

for (let i = 0; i < 4; i++) {
  sliderRounds[i].addEventListener('click', function () {
    let indexOfThisRound = Array.from(sliderRounds).indexOf(this);
    let tempVar = sliderRoundIndex;
    if (indexOfThisRound >= sliderRoundIndex) {
      for (let j = 0; j < indexOfThisRound - tempVar; j++) {      
        setTimeout(() => {
          rollRight();
        }, 410*j);
      }
    } else {
      for (let j = 0; j < -indexOfThisRound + tempVar; j++) {
        setTimeout(() => {
          rollLeft();
        }, 410 * j);
      }
    }
  });
}

function createCard(date,text,title) {
  clone = aboutTemplate.content.cloneNode(true);
  clone.querySelector(".about__card-date").textContent = date;
  clone.querySelector(".about__card-title").textContent = title;
  clone.querySelector(".about__card-text").textContent = text;
}

function addCard(date, text, title) {
  createCard(date, text, title);
  aboutCards.append(clone);
}

for (let i = 0; i < 6; i++) {
  addCard(aboutCardsMassive[i].date, aboutCardsMassive[i].text, aboutCardsMassive[i].title);
}

const addedCards = Array.from(document.querySelectorAll('.about__card-item'));
for (let i = 0; i < 3; i++) {
  addedCards[i].classList.add('show');
}

function rollRight() {
  if (lastIndex == 5) { } else {
    addedCards[firstIndex].classList.add('zeroOpacity');
    addedCards[firstIndex + 1].style.transform = 'translateX(' + -383 + 'px)';
    addedCards[firstIndex + 2].style.transform = 'translateX(' + -383 + 'px)';
    setTimeout(() => {
      addedCards[lastIndex + 1].classList.add('show');
      addedCards[lastIndex + 1].classList.add('zeroOpacity');
      addedCards[firstIndex].classList.remove('show');
      addedCards[firstIndex].classList.remove('zeroOpacity');
      addedCards[firstIndex + 1].classList.add('zeroTransition');
      addedCards[firstIndex + 2].classList.add('zeroTransition'); 
      addedCards[firstIndex + 1].style.transform = '';
      addedCards[firstIndex + 2].style.transform = '';
      setTimeout(() => {
        addedCards[firstIndex + 1].classList.remove('zeroTransition');
        addedCards[firstIndex + 2].classList.remove('zeroTransition');
        addedCards[lastIndex + 1].classList.remove('opacityTransition');
        lastIndex++;
        firstIndex++;
        sliderRoundIndex++;
      },200);
      addedCards[lastIndex + 1].classList.add('opacityTransition');
      addedCards[lastIndex + 1].classList.remove('zeroOpacity');
      aboutDots[firstIndex].classList.remove('about__dot_active');
      aboutDots[firstIndex + 1].classList.add('about__dot_active');

    }, 200);
  }
}

function rollLeft() {
  if (firstIndex == 0) { } else {
    addedCards[lastIndex].classList.add('zeroOpacity');
    addedCards[firstIndex].style.transform = 'translateX(' + 383 + 'px)';
    addedCards[firstIndex + 1].style.transform = 'translateX(' + 383 + 'px)';
    setTimeout(() => {
      addedCards[firstIndex - 1].classList.add('show');
      addedCards[firstIndex - 1].classList.add('zeroOpacity');
      addedCards[lastIndex].classList.remove('show');
      addedCards[lastIndex].classList.remove('zeroOpacity');
      addedCards[firstIndex].classList.add('zeroTransition');
      addedCards[firstIndex + 1].classList.add('zeroTransition');
      addedCards[firstIndex].style.transform = '';
      addedCards[firstIndex + 1].style.transform = '';
      setTimeout(() => {
        addedCards[firstIndex].classList.remove('zeroTransition');
        addedCards[firstIndex + 1].classList.remove('zeroTransition');
        addedCards[firstIndex-1].classList.remove('opacityTransition');
        lastIndex--;
        firstIndex--;
        sliderRoundIndex--;
      }, 200);
      addedCards[firstIndex - 1].classList.add('opacityTransition');
      addedCards[firstIndex - 1].classList.remove('zeroOpacity');
      aboutDots[firstIndex].classList.remove('about__dot_active');
      aboutDots[firstIndex - 1].classList.add('about__dot_active');
    }, 200);
  }
}

rollToRightButton.addEventListener('click', rollRight);
rollToLeftButton.addEventListener('click', rollLeft);
