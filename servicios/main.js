import myHeader from "./components/myHeader.js";
import myCards from "./components/myCards.js";
import myModals from "./components/myModals.js";
myHeader.show();
myCards.show();
myModals.show();


setTimeout(function(){
    // Obtiene el botón y el modal
// Obtiene el botón y el modal
var boton = document.getElementById("miBoton");
var modal = document.getElementById("miModal");
// Agrega un evento para abrir el modal cuando se hace clic en el botón
boton.onclick = function() {
  modal.style.display = "block";
}
// Agrega un evento para cerrar el modal cuando se hace clic en el botón de cerrar
var cerrar = document.getElementsByClassName("cerrar")[0];
cerrar.onclick = function() {
  modal.style.display = "none";
}

// Agrega un evento para cerrar el modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var boton2 = document.getElementById("miBoton2");
var modal2 = document.getElementById("miModal2");
// Agrega un evento para abrir el modal cuando se hace clic en el botón
boton2.onclick = function() {
  modal2.style.display = "block";
}
// Agrega un evento para cerrar el modal cuando se hace clic en el botón de cerrar
var cerrar2 = document.getElementsByClassName("cerrar2")[0];
cerrar2.onclick = function() {
  modal2.style.display = "none";
}

// Agrega un evento para cerrar el modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}



var boton3 = document.getElementById("miBoton3");
var modal3 = document.getElementById("miModal3");
// Agrega un evento para abrir el modal cuando se hace clic en el botón
boton3.onclick = function() {
  modal3.style.display = "block";
}
// Agrega un evento para cerrar el modal cuando se hace clic en el botón de cerrar
var cerrar3 = document.getElementsByClassName("cerrar3")[0];
cerrar3.onclick = function() {
  modal3.style.display = "none";
}

// Agrega un evento para cerrar el modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}



var boton4 = document.getElementById("miBoton4");
var modal4 = document.getElementById("miModal4");
// Agrega un evento para abrir el modal cuando se hace clic en el botón
boton4.onclick = function() {
  modal4.style.display = "block";
}
// Agrega un evento para cerrar el modal cuando se hace clic en el botón de cerrar
var cerrar4 = document.getElementsByClassName("cerrar4")[0];
cerrar4.onclick = function() {
  modal4.style.display = "none";
}

// Agrega un evento para cerrar el modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal4.style.display = "none";
  }
}

}, 1000)
