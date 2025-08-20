// JS para menú lateral moderno y responsivo

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuLateral = document.querySelector('.menu-lateral');
  const links = document.querySelectorAll('.menu-list a');

  // Mostrar/ocultar menú en móvil
  menuToggle.addEventListener('click', function () {
    menuLateral.classList.toggle('menu-open');
  });

  // Cerrar menú al hacer clic en un enlace (solo en móvil)
  links.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 700) {
        menuLateral.classList.remove('menu-open');
      }
    });
  });

  // Opcional: cerrar menú al hacer clic fuera del menú
  document.addEventListener('click', function (e) {
    if (
      window.innerWidth <= 700 &&
      menuLateral.classList.contains('menu-open') &&
      !menuLateral.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menuLateral.classList.remove('menu-open');
    }
  });

  // Opcional: abre el menú si la ventana se agranda
  window.addEventListener('resize', function () {
    if (window.innerWidth > 700) {
      menuLateral.classList.remove('menu-open');
    }
  });
});