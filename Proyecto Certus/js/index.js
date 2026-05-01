window.onload = function() {
  let mensaje = document.getElementById("mensaje-bienvenida");

  mensaje.textContent = "🍰 ¡Bienvenidos a tu tienda de postres favorita!";
  mensaje.style.display = "block";

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000);
};