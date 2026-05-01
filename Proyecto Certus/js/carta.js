let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  mostrarCarrito();
  mostrarMensaje(nombre + " agregado 🛒");
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function mostrarCarrito() {
  let lista = document.getElementById("carrito");
  let totalTexto = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    let item = document.createElement("li");
    item.innerHTML = `
      ${producto.nombre} - S/ ${producto.precio}
      <button onclick="eliminarProducto(${index})">❌</button>
    `;
    lista.appendChild(item);
    total += producto.precio;
    function mostrarMensaje(texto) {
  let mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.display = "block";

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2000);
  function animarBoton(boton) {
  boton.style.transform = "scale(1.2)";
  setTimeout(() => {
    boton.style.transform = "scale(1)";
  }, 200);
}
}
  });

 totalTexto.textContent = total;
}
