let carrito = [];

// AGREGAR PRODUCTO
function agregarAlCarrito(nombre, precio) {

  carrito.push({ nombre, precio });

  mostrarCarrito();
  mostrarMensaje(nombre + " agregado 🛒");

}

//  ELIMINAR PRODUCTO
function eliminarProducto(index) {

  carrito.splice(index, 1);
  mostrarCarrito();

}

//  MOSTRAR CARRITO
function mostrarCarrito() {

  let lista = document.getElementById("carrito");
  let totalTexto = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {

    let item = document.createElement("li");

    // TEMPLATE STRING CORRECTO
    item.innerHTML = `
      ${producto.nombre} - S/ ${producto.precio}
      <button onclick="eliminarProducto(${index})">❌</button>
    `;

    lista.appendChild(item);

    total += producto.precio;

  });

  // 🔥 OPERADOR TERNARIO
  totalTexto.textContent = (total === 0) ? 0 : total;

}

// 🔥 MENSAJE
function mostrarMensaje(texto) {

  let mensaje = document.getElementById("mensaje");

  // CONDICIONAL
  if (mensaje !== null) {

    mensaje.textContent = texto;
    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);

  }

}

//  ANIMACIÓN BOTÓN
function animarBoton(boton) {

  boton.style.transform = "scale(1.2)";

  setTimeout(() => {
    boton.style.transform = "scale(1)";
  }, 200);
}
function pagar() {
  if (carrito.length === 0) {
    alert("⚠️ Tu carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero hacer el siguiente pedido:%0A";

  carrito.forEach(producto => {
    mensaje += `- ${producto.nombre} (S/ ${producto.precio})%0A`;
  });

  let total = carrito.reduce((sum, p) => sum + p.precio, 0);

  mensaje += `%0ATotal: S/ ${total}`;

  let numero = "51999999999"; // 🔥 CAMBIA por tu número real

  window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}
window.addEventListener("load", () => {
  const mensaje = document.getElementById("mensaje-carta");

  mensaje.classList.add("mostrar-mensaje");

  setTimeout(() => {
    mensaje.style.opacity = "0";
  }, 2500);
});



