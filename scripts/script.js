const buttonPopupAiReseach1 = document.querySelector('#ai-research-button-one');
const buttonPopupAiReseach2 = document.querySelector('#ai-research-button-two');
const buttonPopupAiReseach3 = document.querySelector('#ai-research-button-three');
const buttonPopupAiReseach4 = document.querySelector('#ai-research-button-four');
const blockAiResearch = document.querySelector('.ai-research-lab');
const widthWindow = window.innerWidth;
let indArrayForCreatePopup = widthWindow < 1200 ? widthWindow < 768 ? 2 : 1 : 0; // Индекс необходимого объекта в массиве для попапа AiResearch в зависимости от размера экрана.

const handleCloseAiResearchPopup = () => {
  const popupAiResearch = document.querySelector('.popup-ai-research');
  popupAiResearch.classList.remove('popup-ai-research_active');
  deleteInnerPopupAiResearch();
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
const handleCreateAiResearchPopup = (item) => {
  const popup = createNodePopupAiResearch();  // Создание клона.
  fillBaseInfoPopupAiResearch(popup, item);        // Заполнение клона основной информацией.
  blockAiResearch.append(popup);            // Добавление клона в разметку.
  const buttonCloseAiResearchPopup = document.querySelector('.popup-ai-research__close'); // Кнопка закрытия попапа AI Research.
  fillTextPopupAiResearch(item);           // Добавление текстового содержимого в попап AiResearch.
  buttonCloseAiResearchPopup.addEventListener('click', handleCloseAiResearchPopup);
  popup.classList.add('popup-ai-research_active');
}

// Удаление popup AiResearch из разметки.
const deleteInnerPopupAiResearch = () => {
  document.querySelector('.popup-ai-research').remove();
}

buttonPopupAiReseach1.addEventListener('click', () => handleCreateAiResearchPopup(popupFirstCard[indArrayForCreatePopup]));
buttonPopupAiReseach2.addEventListener('click', () => handleCreateAiResearchPopup(popupSecondCard[indArrayForCreatePopup]));
buttonPopupAiReseach3.addEventListener('click', () => handleCreateAiResearchPopup(popupThirdCard[indArrayForCreatePopup]));
buttonPopupAiReseach4.addEventListener('click', () => handleCreateAiResearchPopup(popupFourthCard[indArrayForCreatePopup]));
window.addEventListener('click', e => {
  const target = e.target;
  target.getAttribute('class') === 'popup-ai-research popup-ai-research_active' ? handleCloseAiResearchPopup() : '';
})
