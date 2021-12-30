(() => {
  const refs = {
    openMenuBtn: document.querySelector('.btn__open-menu'),
    closeMenuBtn: document.querySelector('.btn__close-menu'),
    menu: document.querySelector('.mob__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();