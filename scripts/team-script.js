const teamCardTemplate = document.getElementById('team__card-template');
const teamDotTemplate = document.getElementById('team__dot-template');
const teamCards = document.querySelector('.team__cards');
const teamDotsContainer = document.querySelector('.team__dots');
const teamRollToRightButton = document.querySelector('.team__roll-to-right');
const teamRollToLeftButton = document.querySelector('.team__roll-to-left');
const teamCardsMassive = [
  {
    surname: 'Бобцов',
    name: 'Алексей Алексеевич',
    post: 'Директор, профессор, ДТН',
    shortPost: 'Директор, ДТН',
    photo: './images/team/manPhoto.png',
  },
  {
    surname: 'Бухановский',
    name: 'Александр Валерьевич',
    post: 'Директор, руководитель, ДТН',
    shortPost: 'Директор, ДТН',
    photo: './images/team/manPhoto1.png',
  },
  {
    surname: 'Муромцев',
    name: 'Дмитрий Ильич',
    post: 'Руководитель, доцент, ДТН',
    shortPost: 'Руководитель, ДТН',
    photo: './images/team/manPhoto2.png',
  },
  {
    surname: 'Матвеев',
    name: 'Юрий Николаевич',
    post: 'Руководитель, профессор, ДТН',
    shortPost: 'Руководитель, ДТН',
    photo: './images/team/manPhoto3.png',
  },
  {
    surname: 'Шалыто',
    name: 'Анатолий Абрамович',
    post: 'Профессор, ДТН',
    shortPost: 'Профессор, ДТН',
    photo: './images/team/manPhoto4.png',
  },
  {
    surname: 'Колобин',
    name: 'Сергей Алексеевич',
    post: 'Начальник, профессор, ДТН',
    shortPost: 'Начальник, ДТН',
    photo: './images/team/manPhoto5.png',
  },
  {
    surname: 'Пыркин',
    name: 'Антон Александрович',
    post: 'Декан, профессор, ДТН',
    shortPost: 'Декан, ДТН',
    photo: './images/team/manPhoto6.png',
  },
];

/*
let teamAchualSecondCard = 0;
let teamAchualThirdCard = 0;
let teamSliderRoundIndex = 0;
let teamLastIndex = 3;
let teamFirstIndex = 0;
*/

function createTeamCard(photo, name, surname, post, shortPost) {
  clone = teamCardTemplate.content.cloneNode(true);
  clone.querySelector(".team__card-name").textContent = name;
  clone.querySelector(".team__card-surname").textContent = surname;
  clone.querySelector(".team__card-post").textContent = post;
  clone.querySelector(".team__card-shortPost").textContent = shortPost;
  clone.querySelector(".team__card-photo").src = photo;
  clone.querySelector(".team__card-photo").alt = surname + name;
}

function createTeamDot() {
  clone = teamDotTemplate.content.cloneNode(true);
}

function addTeamDot() {
  createTeamDot();
  teamDotsContainer.append(clone);
}

function addTeamCard(photo, name, surname, post, shortPost) {
  createTeamCard(photo, name, surname, post, shortPost);
  teamCards.append(clone);
}

for (let i = 0; i < teamCardsMassive.length; i++) {
  addTeamCard(teamCardsMassive[i].photo, teamCardsMassive[i].name, teamCardsMassive[i].surname, teamCardsMassive[i].post, teamCardsMassive[i].shortPost);
}
teamCardTemplate.remove();

$('.team__cards').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  dots: true,
  appendDots: '.team__dots',
  appendArrows: '.team',
  dotsClass: 'slick-dots__team',
  prevArrow: '.team__roll-to-left',
  nextArrow: '.team__roll-to-right',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});
/*
for (let i = 0; i < teamCardsMassive.length - 3; i++) {
  addTeamDot();
}

const teamDots = document.querySelectorAll('.team__dot');
teamDots[0].classList.add('team__dot_active');

for (let i = 0; i < teamDots.length; i++) {
  teamDots[i].addEventListener('click', function () {
    let teamIndexOfThisRound = Array.from(teamDots).indexOf(this);
    let tempVar = teamSliderRoundIndex;
    if (teamIndexOfThisRound >= teamSliderRoundIndex) {
      for (let j = 0; j < teamIndexOfThisRound - tempVar; j++) {
        setTimeout(() => {
          teamRollRight();
        }, 410 * j);
      }
    } else {
      for (let j = 0; j < -teamIndexOfThisRound + tempVar; j++) {
        setTimeout(() => {
          teamRollLeft();
        }, 410 * j);
      }
    }
  });
}
*/
/*
const addedTeamCards = Array.from(document.querySelectorAll('.team__card-item'));
for (let i = 0; i < 4; i++) {
  addedTeamCards[i].classList.add('team__card-item_show');
}
*/

/*
function teamRollRight() {
  if (teamLastIndex == addedTeamCards.length - 1) {
    if (window.innerWidth <= 768 && window.innerWidth > 320) {
      if (teamAchualSecondCard == 0) {
        addedTeamCards[teamFirstIndex].style.transform = 'translateX(' + -255 + 'px)';
        addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + -255 + 'px)';
        addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + -255 + 'px)';
        addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + -255 + 'px)';
        teamAchualSecondCard = 1;
      }
    } else if (window.innerWidth <= 320) {
      switch (teamAchualSecondCard + teamAchualThirdCard) {
        case 0:
          addedTeamCards[teamFirstIndex].style.transform = 'translateX(' + -160 + 'px)';
          addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + -160 + 'px)';
          addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + -160 + 'px)';
          addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + -160 + 'px)';
          teamAchualSecondCard = 1;
          break;
        case 1:
          addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + -320 + 'px)';
          addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + -320 + 'px)';
          addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + -320 + 'px)';
          teamAchualThirdCard = 1;
          break;
        case 2:

          break;
      }
    }
  } else {
    addedTeamCards[teamFirstIndex].classList.add('team__card-item_zeroOpacity');
    addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + -255 + 'px)';
    addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + -255 + 'px)';
    addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + -255 + 'px)';
    setTimeout(() => {
      addedTeamCards[teamLastIndex + 1].classList.add('team__card-item_show');
      addedTeamCards[teamLastIndex + 1].classList.add('team__card-item_zeroOpacity');
      addedTeamCards[teamFirstIndex].classList.remove('team__card-item_show');
      addedTeamCards[teamFirstIndex].classList.remove('team__card-item_zeroOpacity');
      addedTeamCards[teamFirstIndex + 1].classList.add('team__card-item_zeroTransition');
      addedTeamCards[teamFirstIndex + 2].classList.add('team__card-item_zeroTransition');
      addedTeamCards[teamFirstIndex + 3].classList.add('team__card-item_zeroTransition');
      addedTeamCards[teamFirstIndex + 1].style.transform = '';
      addedTeamCards[teamFirstIndex + 2].style.transform = '';
      addedTeamCards[teamFirstIndex + 3].style.transform = '';
      setTimeout(() => {
        addedTeamCards[teamFirstIndex + 1].classList.remove('team__card-item_zeroTransition');
        addedTeamCards[teamFirstIndex + 2].classList.remove('team__card-item_zeroTransition');
        addedTeamCards[teamFirstIndex + 3].classList.remove('team__card-item_zeroTransition');
        addedTeamCards[teamLastIndex + 1].classList.remove('team__card-item_opacityTransition');
        teamLastIndex++;
        teamFirstIndex++;
        teamSliderRoundIndex++;
      }, 200);
      addedTeamCards[teamLastIndex + 1].classList.add('team__card-item_opacityTransition');
      addedTeamCards[teamLastIndex + 1].classList.remove('team__card-item_zeroOpacity');
      teamDots[teamFirstIndex].classList.remove('team__dot_active');
      teamDots[teamFirstIndex + 1].classList.add('team__dot_active');

    }, 200);
  }
}

function teamRollLeft() {
  if (teamFirstIndex == 0) { } else {
    if (teamLastIndex == addedTeamCards.length - 1 && teamAchualSecondCard == 1) {
      if (window.innerWidth <= 768 && window.innerWidth > 320) {
        if (teamAchualSecondCard == 1) {
          addedTeamCards[teamFirstIndex].style.transform = 'translateX(' + 0 + 'px)';
          addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + 0 + 'px)';
          addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + 0 + 'px)';
          addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + 0 + 'px)';
          teamAchualSecondCard = 0;
        }
      } else if (window.innerWidth <= 320) {
        switch (teamAchualSecondCard + teamAchualThirdCard) {
          case 0:

            break;
          case 1:
            addedTeamCards[teamFirstIndex].style.transform = 'translateX(' + 0 + 'px)';
            addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + 0 + 'px)';
            addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + 0 + 'px)';
            addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + 0 + 'px)';
            teamAchualSecondCard = 0;
            break;
          case 2:
            addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + -160 + 'px)';
            addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + -160 + 'px)';
            addedTeamCards[teamFirstIndex + 3].style.transform = 'translateX(' + -160 + 'px)';
            teamAchualThirdCard = 0;
            break;
        }
      }
    } else {
      addedTeamCards[teamLastIndex].classList.add('team__card-item_zeroOpacity');
      addedTeamCards[teamFirstIndex].style.transform = 'translateX(' + 255 + 'px)';
      addedTeamCards[teamFirstIndex + 1].style.transform = 'translateX(' + 255 + 'px)';
      addedTeamCards[teamFirstIndex + 2].style.transform = 'translateX(' + 255 + 'px)';
      setTimeout(() => {
        addedTeamCards[teamFirstIndex - 1].classList.add('team__card-item_show');
        addedTeamCards[teamFirstIndex - 1].classList.add('team__card-item_zeroOpacity');
        addedTeamCards[teamLastIndex].classList.remove('team__card-item_show');
        addedTeamCards[teamLastIndex].classList.remove('team__card-item_zeroOpacity');
        addedTeamCards[teamFirstIndex].classList.add('team__card-item_zeroTransition');
        addedTeamCards[teamFirstIndex + 1].classList.add('team__card-item_zeroTransition');
        addedTeamCards[teamFirstIndex + 2].classList.add('team__card-item_zeroTransition');
        addedTeamCards[teamFirstIndex].style.transform = '';
        addedTeamCards[teamFirstIndex + 1].style.transform = '';
        addedTeamCards[teamFirstIndex + 2].style.transform = '';
        setTimeout(() => {
          addedTeamCards[teamFirstIndex].classList.remove('team__card-item_zeroTransition');
          addedTeamCards[teamFirstIndex + 1].classList.remove('team__card-item_zeroTransition');
          addedTeamCards[teamFirstIndex + 2].classList.remove('team__card-item_zeroTransition');
          addedTeamCards[teamFirstIndex - 1].classList.remove('team__card-item_opacityTransition');
          teamLastIndex--;
          teamFirstIndex--;
          teamSliderRoundIndex--;
        }, 200);
        addedTeamCards[teamFirstIndex - 1].classList.add('team__card-item_opacityTransition');
        addedTeamCards[teamFirstIndex - 1].classList.remove('team__card-item_zeroOpacity');
        teamDots[teamFirstIndex].classList.remove('team__dot_active');
        teamDots[teamFirstIndex - 1].classList.add('team__dot_active');
      }, 200);
    }
  }
}
window.addEventListener('load', function () {

  let touchsurface = document.getElementById('team__touchsurface');
  let startX;
  let startY;
  let dist;
  let threshold = 150; // минимальное расстояние для swipe

  function handleswipe(isrightswipe) {
    if (isrightswipe > 150) {
      teamRollLeft();
    } else if (isrightswipe < -150) {
      teamRollRight();
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

teamRollToRightButton.addEventListener('click', teamRollRight);
teamRollToLeftButton.addEventListener('click', teamRollLeft);

if (document.documentElement.clientWidth < 321) {

}
*/