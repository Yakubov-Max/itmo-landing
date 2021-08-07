const headerMobileMenuIcon = document.querySelector('.header__mobile-menu');
const headerLogo = document.querySelector('.header__logo');
const headerMobileButton = document.querySelector('.header__mobile-menu-btn')
headerMobileButton.addEventListener('click', function () {
  console.log(headerMobileMenuIcon.style.left);
  if (!headerMobileMenuIcon.style.left) {
    window.setTimeout(headerMobileMenuIcon.style.left = "269px", 100);
    headerLogo.style.marginRight = "calc(100vw - 70px)";
  } else {
    window.setTimeout(headerMobileMenuIcon.style.left = "", 100);
    headerLogo.style.marginRight = "";
  }
});

