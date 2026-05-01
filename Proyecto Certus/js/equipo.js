document.addEventListener("DOMContentLoaded", () => {

  // 🔥 1. Mensaje dinámico al entrar a la página
  console.log("💛 Página de equipo cargada correctamente");

  // 🔥 2. Animación extra al cargar (refuerza el CSS)
  const bloques = document.querySelectorAll(".bloque");

  bloques.forEach((bloque, index) => {
    bloque.style.opacity = "0";
    bloque.style.transform = "translateY(20px)";

    setTimeout(() => {
      bloque.style.transition = "0.8s ease";
      bloque.style.opacity = "1";
      bloque.style.transform = "translateY(0)";
    }, index * 300);
  });

  // 🔥 3. Mensaje interactivo opcional (si quieres usar botón después)
  const mensaje = document.createElement("div");

  mensaje.textContent = "💛 Somos un equipo que trabaja con amor en cada postre";
  mensaje.style.position = "fixed";
  mensaje.style.bottom = "20px";
  mensaje.style.left = "20px";
  mensaje.style.background = "#b3102e";
  mensaje.style.color = "white";
  mensaje.style.padding = "10px 15px";
  mensaje.style.borderRadius = "10px";
  mensaje.style.fontSize = "12px";
  mensaje.style.display = "none";
  mensaje.style.zIndex = "9999";

  document.body.appendChild(mensaje);

  // Mostrar mensaje al pasar 2 segundos
  setTimeout(() => {
    mensaje.style.display = "block";

    // ocultar después de 3 segundos
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);

  }, 2000);

});
