document.addEventListener("DOMContentLoaded", () => {

  // 🔥 1. Mensaje en consola (evento DOMContentLoaded)
  console.log("💛 Página de equipo cargada correctamente");

  // 🔥 2. Animación de bloques
  const bloques = document.querySelectorAll(".bloque");

  // CONDICIONAL
  if (bloques.length > 0) {

    bloques.forEach((bloque, index) => {

      bloque.style.opacity = "0";
      bloque.style.transform = "translateY(20px)";

      setTimeout(() => {
        bloque.style.transition = "0.8s ease";
        bloque.style.opacity = "1";
        bloque.style.transform = "translateY(0)";
      }, index * 300);

    });

  }

  // 🔥 3. Mensaje flotante
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

  // 🔥 4. Mostrar mensaje con lógica
  setTimeout(() => {

    // OPERADOR TERNARIO
    let mostrar = (mensaje !== null) ? true : false;

    if (mostrar === true) {

      mensaje.style.display = "block";

      setTimeout(() => {
        mensaje.style.display = "none";
      }, 3000);

    }

  }, 2000);

});
