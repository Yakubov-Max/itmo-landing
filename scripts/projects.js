console.log("Projects.js loaded");

// Селекторы dropdown
const projectDropdown = document.querySelector(".projects__dropdown");
const projectDropdownContent = projectDropdown.querySelector(
  ".projects__dropdown-content"
);
const projectDropdownButton = projectDropdown.querySelector(
  ".projects__menu-dropdown-button"
);

projectDropdownButton.addEventListener("click", handleProjectsDropdown);

// Функция открытия dropdown меню
function handleProjectsDropdown() {
  projectDropdownContent.classList.toggle("projects__dropdown-content_opened");
  reverseProjectsArrow();
}

// Функция переворачивания стрелочки dropdown меню
function reverseProjectsArrow() {
  if (projectDropdownButton.style.transform === "rotate(180deg)") {
    projectDropdownButton.style.transform = "rotate(0deg)";
  } else {
    projectDropdownButton.style.transform = "rotate(180deg)";
  }
}

// Селекторы меню
const projectsMenu = document.querySelector(".projects__menu");
const projectsMenuElements = projectsMenu.querySelectorAll(
  ".projects__menu-item"
);

projectsMenuElements.forEach((element) => {
  element.addEventListener("click", handleHighlightProjectsMenu);
});

// Функция хайлайта элемента меню
function handleHighlightProjectsMenu(event) {
  event.preventDefault()
  projectsMenuElements.forEach((element) => {
    if (element.classList.item(1)) {
      element.classList.remove("projects__menu-item_active");
    }
  });
  event.currentTarget.classList.add("projects__menu-item_active");
}

// Селекторы элементов пагинации
const paginatePrevious = document.querySelector(
  ".projects__pagination-left-arrow"
);
const paginateNext = document.querySelector(
  ".projects__pagination-right-arrow"
);

const paginateCurrentPage = document.querySelector(
  ".projects__pagination-current-page"
);
const paginateLastPage = document.querySelector(
  ".projects__pagination-last-page"
);

// Контейнер проектов
const projectContainer = document.querySelector(".projects__container");

// Тестовые данные карточек
const projectsCard = {
  logo: "./images/partnership-logos/gazprom-logo.svg",
  description:
    "Направление включает в себя исследования и разработки технологий МО и КТ. Модули для внедрения в предметные сетевые программы магистратуры с элементами МО и КТ, или программы ДПО.",
  link: "#",
  test_span: 0
};

const CARDS = [];

for (let i = 0; i < 120; i++) {
  let copy = Object.assign({}, projectsCard);
  copy.test_span = i
  CARDS.push(copy);
}

// Функция добавления карточек на страницу
function renderProjectsCards(cards) {
  // удаление старых карточек
  let oldCards = projectContainer.querySelectorAll(".projects__item");
  oldCards.forEach((element) => {
    element.remove();
  });

  // Добавление новых карточек
  cards.forEach((element) => {
    projectContainer.append(element);
  });
}

// Пагинация
paginateNext.addEventListener("click", handlePaginateNextPage);
paginatePrevious.addEventListener("click", handlePaginatePreviousPage);

function handlePaginateNextPage(event) {
  event.preventDefault();
  currentPage += 1;
  paginateProjectsCards(currentPage);
}

function handlePaginatePreviousPage(event) {
  event.preventDefault();
  currentPage -= 1;
  paginateProjectsCards(currentPage);
}

// Функция получения кол-ва карточек на странице, по ширине экрана
function getCardsPerPage() {
  let screenWidth = window.screen.width;
  let cardsPerPage = 0;

  if (screenWidth > 865) {
    cardsPerPage = 4;
  } else if (screenWidth <= 865 && screenWidth > 620) {
    cardsPerPage = 3;
  } else if (screenWidth <= 620) {
    cardsPerPage = 2;
  }

  return cardsPerPage;
}

let currentPage = 1;

function updateTotalPages() {
  let totalPages = Math.ceil(CARDS.length / getCardsPerPage());
  paginateLastPage.textContent = totalPages;
}

function paginateProjectsCards(currentPage) {
  let totalPages = Math.ceil(CARDS.length / getCardsPerPage());
  let cardsPerPage = getCardsPerPage();
  // краевые случаи пагинации
  if (currentPage <= 0) {
    currentPage = 1;
  } else if (currentPage >= totalPages) {
    currentPage = totalPages;
  }

  // получение индексов карточек
  let startIndex = (currentPage - 1) * cardsPerPage;
  let endIndex = startIndex + cardsPerPage;

  // получение карточек
  let cardsToRender = getCards(startIndex, endIndex);

  renderProjectsCards(cardsToRender);

  paginateCurrentPage.textContent = currentPage;
}

// Функция получения элементов карточек
function getCards(startIndex, endIndex) {
  let cardsData = CARDS.slice(startIndex, endIndex);
  let cardsDocumentElements = [];

  cardsData.forEach((cardData) => {
    cardsDocumentElements.push(createProjectsCard(cardData));
  });

  return cardsDocumentElements;
}

// Функция создания элемента карточки
function createProjectsCard(cardData) {
  const projectsCardTemplate =
    document.querySelector("#projects__item").content;
  let cardElement = projectsCardTemplate
    .querySelector(".projects__item")
    .cloneNode(true);

  cardElement.querySelector(".projects__item-about").textContent =
    cardData.description;
  cardElement.querySelector(".projects__item-details").href = cardData.link;
  cardElement.querySelector(".projects__test-span").textContent = cardData.test_span;
  return cardElement;
}

// Функция создания начальных
function renderInitialProjectsCards() {
  let cardsPerPage = getCardsPerPage();
  let cards = getCards(0, cardsPerPage);
  renderProjectsCards(cards);
  updateTotalPages();
}
renderInitialProjectsCards();
window.addEventListener("resize", renderInitialProjectsCards);
