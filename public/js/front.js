document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll("button[aria-controls]");

  faqButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetId = event.currentTarget.getAttribute("aria-controls");
      const targetElement = document.getElementById(targetId);
      const isExpanded =
        event.currentTarget.getAttribute("aria-expanded") === "true";

      // Expandir o colapsar el contenido de la pregunta
      targetElement.style.display = isExpanded ? "none" : "block";

      // Cambiar el atributo aria-expanded
      event.currentTarget.setAttribute("aria-expanded", !isExpanded);

      // Cambiar la visibilidad del ícono de colapso
      const collapseIcon = event.currentTarget.querySelector(".collapse-icon");
      const expandIcon = event.currentTarget.querySelector(".expand-icon");
      collapseIcon.classList.toggle("hidden");
      expandIcon.classList.toggle("hidden");
    });
  });
});
