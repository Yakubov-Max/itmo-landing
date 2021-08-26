const aboutCardTemplate = document.getElementById('about__card-template');
const aboutDotTemplate = document.getElementById('about__dot-template');
const aboutCards = document.querySelector('.about__cards');
const dotsContainer = document.querySelector('.about__dots');
const rollToRightButton = document.querySelector('.about__roll-to-right');
const rollToLeftButton = document.querySelector('.about__roll-to-left');
const burgerListOfItems = document.querySelectorAll('.header__mobile-menu-item');
const aboutHeaderDropDown = document.getElementById("educationDropDown");

let aboutAchualSecondCard = 0;
let aboutAchualThirdCard = 0;
let sliderRoundIndex = 0;
const aboutCardsMassive = [
  {
    title: 'ЗНАКОМСТВО С МАШИННЫМ ОБУЧЕНИЕМ: СТУДЕНТЫ ЕВРАЗИЙСКОГО НАЦИОНАЛЬ…',
    text: `Университет ИТМО провел научно-исследовательскую стажировку
          для группы магистрантов из Евразийского национального университета имени Л.Н.
      Гумилева.Ведущие преподаватели
          в течение десяти дней рассказывали им об основах машинного обучения.`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: 'АВТОРЫ РОБОТА-МУЗЫКАНТА РОБЕРТА РОБОТЕЦКОГО ПРИЗНАНЫ ЛУЧШИМИ НОВИЧ…',
    text: `Команда ИТМО стала лучшей на
международном финале RoboCup-2021. Успех
ребятам принес Роберт Роботецкий — робот-виртуоз,
исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники...`,
    date: 'Понедельник, 5 июля 2021г',
  },
  {
    title: 'ВОЗВРАЩЕНИЕ НА ПЕТРОПАВЛОВКУ: КАК ПРОШЕЛ ВЫПУСКНОЙ ITMO. LIVE — 2021',
    text: `Команда ИТМО сделала многое, чтобы вернуть
формат выпускного этого и прошлого года. Из-за
эпидемиологической ситуации отменена развлекательная часть,
но сохранилась торжественная. Выпускники смогли получить
дипломы из рук деканов и услышать поздравления ректора.`,
    date: 'Суббота, 3 июля 2021г',
  },
  {
    title: '«LEAVING THE DIGITAL» — ИЛИ КАК СОЕДИНИТЬ ЦИФРОВОЕ, ТЕХНОЛОГИЧЕСКОЕ И БИОЛОГ…',
    text: `Преподаватели центра Art & Science Университета
ИТМО провели открытый воркшоп, посвященный созданию произведений,
объединяющих в себе биологическую и синтетическую среды.
Серия занятий приурочена к приемной кампании в магистратуру`,
    date: 'Пятница, 2 июля 2021г',
  },
  {
    title: 'В ИТМО ЗАПУСКАЕТСЯ ПЕРВАЯ ПРОЕТНАЯ МАГИСТРАТУРА — ДЛЯ АБИТУРИЕНТОВ ФАКУЛЬТЕТА П…',
    text: `Особенность нового формата магистратуры в том, что
студенты смогут составлять программу своего обучения,
выбирать только те курсы, которые им интересны, а главное — работать над технологически сложным
проектом под руководством менторов из топовых IT-компаний.`,
    date: 'Пятница, 2 июля 2021г',
  },
  {
    title: 'КОГДА НЕ ЗАНИМАЕШЬСЯ СВОИМ ОБРАЗОВАНИЕМ, МОЖНО ПРИЙТИ К СОТСТОЯНИ…',
    text: `Владислав Танков поступил в ИТМО будучи специалистом
в компании JetBrains. На одном из хакатонов в рамках программы с
JetBrains он сделал плагин для проверки грамотности текстов в среде разработки IntelliJ IDEA. После
окончания магистратуры Владислав возглавил команду разработки.`,
    date: 'Пятница, 2 июля 2021г',
  },
  {
    title: 'СТУДЕНТЫ ИТМО И ВЫПУСКНИКИ ЛЭТИ РАЗРАБОТАЛИ МОДУЛЬ ДЛЯ БЫ…',
    text: `Интеллектуальный модуль для станций зарядки
позволяет заряжать накопители в электрокарах и электросамокатах
быстрее, чем при питании от сети. Программное обеспечение модуля
обеспечивает защиту в случае аварийных ситуаций и
повышает эффективность всего зарядного устройства.`,
    date: 'Четверг, 1 июля 2021г',
  },
  {
    title: 'КАКИЕ СУЩЕСТВУЮТ ВАКЦИНЫ, КАК ИХ ИСПЫТЫВАЮТ, И ПО КАКИМ ПРИНЦЫПАМ ИХ СЛЕДУ…',
    text: `Вакцинация от коронавируса стала одной из главных тем.
Весь мир следит за количеством привитых. Прививочная кампания дает
результат — снижается смертность, количество госпитализаций. Но вокруг
вакцинации остается много мифов, которые вызывают у скептиков споры.`,
    date: 'Четверг, 1 июля 2021г',
  },
  {
    title: 'УНИВЕРСИТЕТ ИТМО ЗАПУСКАЕТ НОВУЮ КОРПОРАТИВНУЮ СПЕЦИАЛИЗАЦИЮ В МАГИСТРА…',
    text: `Партнером нового направления станет Napoleon IT.
Сотрудники компании и преподаватели ИТМО будут готовить магистров,
которые смогут работать в проектах, связанных с распознаванием лиц,
технологиями deepfake, созданием приложений для распознавания предметов.`,
    date: 'Среда, 30 июня 2021г',
  },
  {
    title: 'СТУДЕНТКА И СОТРУДНИЦА ИТМО АННА ВОЛОШИНА ПОЛУЧИЛА БРОНЗОВОГО СФИН...',
    text: `В Петропавловской крепости состоялась торжественная церемония
вручения наград лучшим выпускникам Санкт-Петербурга. Среди тех, кто
получил памятную статуэтку, была выпускница факультета технологического
менеджмента и инноваций Анна Волошина. `,
    date: 'Среда, 30 июня 2021г',
  },
];
let lastIndex = 2;
let firstIndex = 0;

function createCard(date, text, title) {
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
aboutCardTemplate.remove();

$('.about__cards').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  dots: true,
  appendDots: '.about__dots',
  appendArrows: '.about__cards-container',
  dotsClass: 'slick-dots__team',
  prevArrow: '.about__roll-to-left',
  nextArrow: '.about__roll-to-right',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
if (window.innerWidth <= 1122) {
  rollToRightButton.style.display = '';
  rollToLeftButton.style.display = '';
}

$(window).resize(function () {
  if (window.innerWidth <= 1122) {
    rollToRightButton.style.display = '';
    rollToLeftButton.style.display = '';
  }
});
/*
for (let i = 0; i < aboutCardsMassive.length - 2; i++) {
  addDot();
}
*/

//const aboutDots = document.querySelectorAll('.about__dot');
//aboutDots[0].classList.add('about__dot_active');
/*
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
*/
/*
const addedCards = Array.from(document.querySelectorAll('.about__card-item'));
for (let i = 0; i < 3; i++) {
  addedCards[i].classList.add('about__card-item_show');
}
*/


/*
function rollRight() {
  if (lastIndex == addedCards.length - 1) {
    if (window.innerWidth <= 768 && window.innerWidth > 320) {
      if (aboutAchualSecondCard == 0) {
        addedCards[firstIndex].style.transform = 'translateX(' + -383 + 'px)';
        addedCards[firstIndex + 1].style.transform = 'translateX(' + -383 + 'px)';
        addedCards[firstIndex + 2].style.transform = 'translateX(' + -383 + 'px)';
        aboutAchualSecondCard = 1;
      }
    } else if (window.innerWidth <= 320) {
      switch (aboutAchualSecondCard + aboutAchualThirdCard) {
        case 0:
          addedCards[firstIndex].style.transform = 'translateX(' + -310 + 'px)';
          addedCards[firstIndex + 1].style.transform = 'translateX(' + -310 + 'px)';
          addedCards[firstIndex + 2].style.transform = 'translateX(' + -310 + 'px)';
          aboutAchualSecondCard = 1;
          break;
        case 1:
          addedCards[firstIndex + 1].style.transform = 'translateX(' + -620 + 'px)';
          addedCards[firstIndex + 2].style.transform = 'translateX(' + -620 + 'px)';
          aboutAchualThirdCard = 1;
          break;
        case 2:

          break;
      }
    }
  } else {
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
      }, 100);
      addedCards[lastIndex + 1].classList.add('about__card-item_opacityTransition');
      addedCards[lastIndex + 1].classList.remove('about__card-item_zeroOpacity');
      aboutDots[firstIndex].classList.remove('about__dot_active');
      aboutDots[firstIndex + 1].classList.add('about__dot_active');

    }, 100);
  }
}
*/

/*function rollLeft() {
  if (firstIndex == 0) { } else {
    if (lastIndex == addedCards.length - 1 && aboutAchualSecondCard == 1) {
      if (window.innerWidth <= 768 && window.innerWidth > 320) {
        addedCards[firstIndex].style.transform = 'translateX(' + 0 + 'px)';
        addedCards[firstIndex + 1].style.transform = 'translateX(' + 0 + 'px)';
        addedCards[firstIndex + 2].style.transform = 'translateX(' + 0 + 'px)';
        aboutAchualSecondCard = 0;
      } else if (window.innerWidth <= 320) {
        switch (aboutAchualSecondCard + aboutAchualThirdCard) {
          case 0:
            break;
          case 1:
            addedCards[firstIndex].style.transform = 'translateX(' + 0 + 'px)';
            addedCards[firstIndex + 1].style.transform = 'translateX(' + 0 + 'px)';
            addedCards[firstIndex + 2].style.transform = 'translateX(' + 0 + 'px)';
            aboutAchualSecondCard = 0;
            break;
          case 2:
            addedCards[firstIndex + 1].style.transform = 'translateX(' + -310 + 'px)';
            addedCards[firstIndex + 2].style.transform = 'translateX(' + -310 + 'px)';
            aboutAchualThirdCard = 0;
            break;
        }
      }
    } else {
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
}
*/
/*
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
*/
aboutHeaderDropDown.addEventListener('click', function () {
  document.querySelector(".header__educationdropdown-content").classList.toggle("header__dropbtn_show");
  for (let i = 0; i < 7; i++) {
    if (i == 3) {
      burgerListOfItems[i].style.fontWeight = burgerListOfItems[i].style.fontWeight != 600 ? 600 : 400;
      continue;
    }
    burgerListOfItems[i].style.opacity = burgerListOfItems[i].style.opacity == 0.5 ? 1 : 0.5;
  }
});
//rollToRightButton.addEventListener('click', rollRight);
//rollToLeftButton.addEventListener('click', rollLeft);
