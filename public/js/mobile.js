document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.getElementById("openMenuButton");
  const closeMenuButton = document.getElementById("closeMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  // Oculta el menú móvil por defecto
  mobileMenu.style.display = "none";

  // Muestra el menú móvil al hacer clic en el botón de abrir el menú
  openMenuButton.addEventListener("click", function () {
    mobileMenu.style.display = "block";
  });

  // Oculta el menú móvil al hacer clic en el botón de cerrar el menú
  closeMenuButton.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });
});
