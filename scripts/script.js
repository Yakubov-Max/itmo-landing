function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include("./scripts/header-script.js");
include("./scripts/about-script.js");
include("./scripts/team-script.js");
include("./scripts/projects.js");
include("./scripts/feedback.js");

const buttonPopupAiReseach1 = document.querySelector('#ai-research-button-one');
const buttonPopupAiReseach2 = document.querySelector('#ai-research-button-two');
const buttonPopupAiReseach3 = document.querySelector('#ai-research-button-three');
const buttonPopupAiReseach4 = document.querySelector('#ai-research-button-four');
const blockAiResearch = document.querySelector('.ai-research-lab');
let numberOfButton;
const buttonChangeEducation = document.querySelector('.education__buttons-container');  // Кнопка переключения образования.
const aspirantePartButton = document.querySelector('#aspirante');                       // Часть кнопки аспирантов.
const magistracyPartButton = document.querySelector('#magistracy');                     // Часть кнопки магистратуры.
const aspiranteContent = document.querySelector('.education__flex-container_absolute'); // Основной меняющийся контент про обучение.
const page = document.querySelector('.page');                                           // Блок для установки класса с блокировкой скролла приоткрытом попапе.
const buttonChangeEducationh1 = document.querySelector('.header__list-second');
const headerEducationdropdownContent = document.querySelector('.header__educationdropdown-content');

// Остановка скролла при открытом попап AiResearch.
const changeScrollWithPopup = () => {
  page.classList.toggle('page_hidden');
}

// Смена контента про виды обучения.
const handleChangeEducation = () => {
  aspirantePartButton.classList.toggle('education__button-change-info_active');
  magistracyPartButton.classList.toggle('education__button-change-info_active');
  handleChangeVisibleContent();
}

// Смена видимости блока с обучением.
const handleChangeVisibleContent = () => {
  aspiranteContent.classList.toggle('education__flex-container_visible');
}

const handleCloseAiResearchPopup = () => {
  const popupAiResearch = document.querySelector('.popup-ai-research');
  popupAiResearch.classList.remove('popup-ai-research_active');
  deleteInnerPopupAiResearch();
  changeScrollWithPopup();
}

// Создание клона попапа AiResearch.
const createNodePopupAiResearch = () => {
  const popupTemplate = document.querySelector('#ai-reserch-popup-template').content;
  const popup = popupTemplate.querySelector('.popup-ai-research').cloneNode(true);
  return popup;
}


// Добавление основной разметки попапа AiResearch: изображения и заголовка.
const fillBaseInfoPopupAiResearch = (popup, item) => {
  popup.querySelector('.popup-ai-research__img').src = item.image;
  popup.querySelector('.popup-ai-research__img').alt = item.alt;
  popup.querySelector('.popup-ai-research__title').textContent = item.title;
}

// Добавление текстового содержимого в попап AiResearch.
const fillTextPopupAiResearch = (basePopup) => {
  const popupAiResearchTextContainer = document.querySelector('.popup-ai-research__text-container');
  const text = basePopup.fullText;
  for(let key in text) {                                                // Добавление в попап AiResearch текста состоящего из параграфов.
    if(key.indexOf('paragraph') === 0) {
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = text[key];
      paragraphElement.classList.add('popup-ai-research__paragraph');
      popupAiResearchTextContainer.append(paragraphElement);
    } else if (key === 'list') {                                      // Добавление в попап AiResearch списка с заголовком.
      const listObject = text[key];
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = listObject.listTitle;
      popupAiResearchTextContainer.append(paragraphElement);
      paragraphElement.classList.add('popup-ai-research__paragraph', 'popup-ai-research__paragraph_list');
      const unorderedList = document.createElement('ul');
      unorderedList.classList.add('popup-ai-research__list');
      popupAiResearchTextContainer.append(unorderedList);
      const listForFilling = document.querySelector('.popup-ai-research__list');
      for(let keyList in listObject) {
        if(keyList.indexOf('listElem') === 0) {
          const listElem = document.createElement('li');
          listElem.textContent = listObject[keyList];
          listForFilling.append(listElem);
        }
      }
    }
  }
}
// Добавление popup AiResearch в разметку.
const handleCreateAiResearchPopup = (num) => {
  const widthWindow = window.innerWidth;
  let indArrayForCreatePopup = widthWindow < 1200 ? widthWindow < 768 ? 2 : 1 : 0; // Индекс необходимого объекта в массиве для попапа AiResearch в зависимости от размера экрана.
  const item = num === 1 ? popupFirstCard[indArrayForCreatePopup] : num === 2 ?
    popupSecondCard[indArrayForCreatePopup] : num === 3 ? popupThirdCard[indArrayForCreatePopup] :
    popupFourthCard[indArrayForCreatePopup];
  const popup = createNodePopupAiResearch();  // Создание клона.
  fillBaseInfoPopupAiResearch(popup, item);        // Заполнение клона основной информацией.
  blockAiResearch.append(popup);            // Добавление клона в разметку.
  const buttonCloseAiResearchPopup = document.querySelector('.popup-ai-research__close'); // Кнопка закрытия попапа AI Research.
  fillTextPopupAiResearch(item);           // Добавление текстового содержимого в попап AiResearch.
  buttonCloseAiResearchPopup.addEventListener('click', handleCloseAiResearchPopup);
  popup.classList.add('popup-ai-research_active');
  changeScrollWithPopup();
  numberOfButton = num;
}

// Удаление popup AiResearch из разметки.
const deleteInnerPopupAiResearch = () => {
  document.querySelector('.popup-ai-research').remove();
}

buttonPopupAiReseach1.addEventListener('click', () => handleCreateAiResearchPopup(1));
buttonPopupAiReseach2.addEventListener('click', () => handleCreateAiResearchPopup(2));
buttonPopupAiReseach3.addEventListener('click', () => handleCreateAiResearchPopup(3));
buttonPopupAiReseach4.addEventListener('click', () => handleCreateAiResearchPopup(4));
buttonChangeEducationh1.addEventListener('click', handleChangeEducation);
headerEducationdropdownContent.addEventListener('click', handleChangeEducation);
buttonChangeEducation.addEventListener('click', handleChangeEducation);
window.addEventListener('click', e => {
  const target = e.target;
  target.getAttribute('class') === 'popup-ai-research popup-ai-research_active' ? handleCloseAiResearchPopup() : '';
  target.getAttribute('class') === 'header__mobile-menu-container' ? closeMobileMenuClickWindow() : '';
  if(projectDropdownContent.classList.contains('projects__dropdown-content_opened') &&
  (target.getAttribute('class') != 'projects__menu-dropdown-button')) {
    !target.closest('.projects__dropdown-content') ? handleProjectsSwitchDropdown() : '';
  }
})

// Изменение popupAIResearch при открытом попапе и изменении ширины экрана.
  window.addEventListener('resize', function() {
    if (document.querySelector('.popup-ai-research_active')) {
      let dinamicWidthWindow = window.innerWidth;
      indArrayForCreatePopup2 = dinamicWidthWindow < 1200 ? dinamicWidthWindow < 768 ? 2 : 1 : 0;
      handleCloseAiResearchPopup();
      handleCreateAiResearchPopup(numberOfButton);
    }
}, true);
