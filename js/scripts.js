const toggleMenuElement = document.getElementById('toggle-btn');
const mainMenuElement = document.getElementById('main-menu');
const mainMenuX = document.getElementById('icon-bar');
const mainMenuSombra = document.getElementById('sombra');

toggleMenuElement.addEventListener('click', () => {
  mainMenuElement.classList.toggle('main-menu--show');
  mainMenuSombra.classList.toggle('sombra-show')
  mainMenuX.classList.toggle('fa-bars');
  mainMenuX.classList.toggle('fa-times');
});
