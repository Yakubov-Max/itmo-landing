// найти контейнер, куда вставлять slider-page
const sliderPageContainer = document.querySelector('.slider-page-container');


//при загрузке окна вставить карточки в контейнер
window.addEventListener('load', () => {
  paintSliderPage();
}, true);

window.addEventListener('resize', () => {
  paintSliderPage();
}, true);

function paintSliderPage() {
  let n = 6;
  // проверка ширины экрана
  let windowWidth = window.screen.width;
  if (windowWidth > 1260) {
    n = 6;
  } else if (windowWidth <= 1260 && windowWidth > 707) {
    n = 4;
  } else if (windowWidth <= 707) {
    n = 1;
  }

  // удаление первой карточки на каждой странице для перерисовки заново при ресайзе - т.к. оставлась она в любом случае
  while (sliderPageContainer.firstChild) {
    sliderPageContainer.firstChild.remove()
  }

  let sliderPage = null; // неприсвоенное значение
  for (let cardPubIndex = 0; cardPubIndex < cardsPublications.length; cardPubIndex++) {
    if (cardPubIndex % n === 0) {
      // запись возвращенной функцией страницы слайдера в переменную, чтобы внутри нее далее найти контейнер для отрисовки карточек
      sliderPage = addSliderPage(sliderPageContainer);
    }
    // отбор каждой карточки по индексу из общего массива объектов с содержимым карточек
    const cardPublications = cardsPublications[cardPubIndex];
    addCardsPublications(cardPublications, sliderPage.querySelector('.publications__container'));
  }
}


// функция вызова тултипа "Читать полностью"
// function openCloseTooltipPublications(tooltip) {
//   tooltip.classList.toggle('tooltip-details_active');
// }

// функции вызова тултипа соцсетей
function openCloseTooltipSocial(tooltip) {
  tooltip.classList.toggle('tooltip-social_active');
}

function openTooltipSocial(tooltip) {
  tooltip.classList.add('tooltip-social_active');
}

function closeTooltipSocial(tooltip) {
  tooltip.classList.remove('tooltip-social_active');
}

//функция создания slider-page для каждой шестерки карточек
function createSliderPagePublications() {
  const sliderPageTemplate = document.querySelector('#slider-page-template').content;
  // поиск и возвращение функцией узла (ноды) "элемент 'карточка'" для клонирования всего содежиомого
  return sliderPageTemplate.querySelector('.slider__page').cloneNode(true);
}

// функция отрисовки одной страницы слайдера
function addSliderPage(sliderPageContainer) {
  const sliderPage = createSliderPagePublications();
  sliderPageContainer.append(sliderPage);
  // вернуть саму страницу слайдов, стобы в нее можно было вставить контент с карточками
  return sliderPage;
}

function createCardsPublications(cardPblItem) {
  const cardPublicationsTemplate = document.querySelector('#cards-publications-template').content;
  // поиск узла (ноды) "элемент 'карточка'" для клонирования всего содежиомого
  const cardPublicationsElement = cardPublicationsTemplate.querySelector('.publications__item').cloneNode(true);
  // найти тултип "Читать полностью" внутри конкретной карточки
  const tooltipDetailsPublications = cardPublicationsElement.querySelector('.tooltip-details');
  // найти кнопку "Поделиться" внутри тултипа "Читать полностью"
  const iconShare = tooltipDetailsPublications.querySelector('.tooltip-details__share-icon');
  // найти тултип с соцсетями внутри тултипа "Читать полностью"
  const tooltipSocialPublications = tooltipDetailsPublications.querySelector('.tooltip-social');
  // найти поля, куда надо добавить содержимое из массива
  cardPublicationsElement.querySelector('.publications__item-image').src = cardPblItem.image;
  cardPublicationsElement.querySelector('.publications__article-heading').textContent = cardPblItem.heading;
  cardPublicationsElement.querySelector('.publications__article-authors').textContent = cardPblItem.authors;
  cardPublicationsElement.querySelector('.publications__article').textContent = cardPblItem.article;
  cardPublicationsElement.querySelector('.publications__link-to-article').href = cardPblItem.link;

// слушатели событий наведения и снятия наведения на/с карточку/-и, чтобы открывать/скрывать тултип "Читать полностью"
//   cardPublicationsElement.addEventListener('mouseover', () => {
//     openCloseTooltipPublications(tooltipDetailsPublications);
//   });
//   cardPublicationsElement.addEventListener('mouseout', () => {
//     openCloseTooltipPublications(tooltipDetailsPublications);
//   });

  // слушатель события нажатия на иконку "поделиться", чтобы открыть тултип с соцсетями и поднять нужную карточку из потока
  // (чтобы тултип оказался поверх других карточек)
  iconShare.addEventListener('click', function () {
    let windowWidth = window.screen.width;
    if (windowWidth <= 1260) {
      openCloseTooltipSocial(tooltipSocialPublications);
    }
    else {
      openTooltipSocial(tooltipSocialPublications);
    }
    cardPublicationsElement.classList.add('publications__item_tooltip-active');
  });
  cardPublicationsElement.addEventListener('mouseleave', function () {
    closeTooltipSocial(tooltipSocialPublications);
    cardPublicationsElement.classList.remove('publications__item_tooltip-active');
  });
  // вернуть готовую карточку со всеми внутренними примочками
  return cardPublicationsElement;
}

// функция для добавления одной карточки в DOM
function addCardsPublications(cardsPublications, cardContainerPublications) {
  const cardElem = createCardsPublications(cardsPublications);
  cardContainerPublications.append(cardElem);
}
