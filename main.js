// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle para o menu móvel
    menuToggle.addEventListener('click', function () {
      // Se o menu estiver visível, esconde; caso contrário, exibe-o em formato coluna
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
      }
    });
  });
  