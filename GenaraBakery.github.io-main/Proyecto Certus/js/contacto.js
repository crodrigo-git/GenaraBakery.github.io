const form = document.getElementById("formulario");
const mensajeExito = document.getElementById("mensaje-exito");
const boton = document.getElementById("btnEnviar");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let celular = document.getElementById("celular").value;
  let postre = document.getElementById("postre").value;
  let mensaje = document.getElementById("mensaje").value;

  // 🔥 VALIDACIÓN COMPLETA (condicional + operadores)
  if (nombre === "" || correo === "" || celular === "" || postre === "" || mensaje === "") {
    alert("⚠️ Completa todos los campos");
    return;
  }

  // 🔥 VALIDACIÓN EXTRA
  if (celular.length < 9) {
    alert("⚠️ El número debe tener al menos 9 dígitos");
    return;
  }

  // 🔥 OPERADOR TERNARIO
  let tipoPostre = (postre === "Otro") ? "personalizado" : postre;

  // 🔥 ANIMACIÓN BOTÓN
  boton.textContent = "Enviando...";
  boton.disabled = true;

  setTimeout(() => {

    mensajeExito.textContent = "✅ Pedido de " + tipoPostre + " enviado correctamente";
    mensajeExito.style.display = "block";

    boton.textContent = "Enviar mensaje";
    boton.disabled = false;

    form.reset();

    setTimeout(() => {
      mensajeExito.style.display = "none";
    }, 3000);

  }, 1500);

});