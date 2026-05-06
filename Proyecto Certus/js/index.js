window.onload = function() {

  let mensaje = document.getElementById("mensaje-bienvenida");

  // CONDICIONAL (por si no existe el elemento)
  if(mensaje !== null) {

    mensaje.textContent = "🍰 ¡Bienvenidos a tu tienda de postres favorita!";
    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);

  }

};

/* 🔎 BUSCADOR SIMPLE */
function buscar() {

  let texto = document.getElementById("busqueda").value;

  // OPERADORES + CONDICIONAL
  if(texto === "") {
    alert("⚠️ Escribe algo para buscar");
  } else {
    alert("Buscando: " + texto);
  }

}