// найти элемент-карточку, в которой содержится тултип "Читать полностью"
const articleItems = document.querySelectorAll('.publications__item');

// функция вызова тултипа "Читать полностью"
function openCloseTooltipPublications(tooltip) {
  tooltip.classList.toggle('tooltip-details_active');
}

// функция вызова тултипа соцсетей
function openCloseTooltipSocial(tooltip) {
  tooltip.classList.toggle('tooltip-social_active');
}

window.addEventListener("load", initTooltipDetails, true);

// функция перебора массива найденных карточек, чтобы открывать тултипы над каждой конкретной карточкой
function initTooltipDetails () {
  for (let articleItemIndex = 0; articleItemIndex < articleItems.length; articleItemIndex++) {
    // выбираем конкретную карточку по индексу в массиве
    const articleItem = articleItems[articleItemIndex];
    // найти тултип "Читать полностью" внутри конкретной карточки
    const tooltipDetailsPublications = articleItem.querySelector('.tooltip-details');
    // найти кнопку "Поделиться" внутри тултипа "Читать полностью"
    const iconShare = tooltipDetailsPublications.querySelector('.tooltip-details__share-icon');
    // найти тултип с соцсетями внутри тултипа "Читать полностью"
    const tooltipSocialPublications = tooltipDetailsPublications.querySelector('.tooltip-social');
    articleItem.addEventListener('mouseover', () => {
      openCloseTooltipPublications(tooltipDetailsPublications);
    });
    articleItem.addEventListener('mouseout', () => {
      openCloseTooltipPublications(tooltipDetailsPublications);
    });
    // слушатель события нажатия на иконку "поделиться", чтобы открыть тултип с соцсетями
    iconShare.addEventListener('click', () => {
      openCloseTooltipSocial(tooltipSocialPublications);
    });
  }
}

