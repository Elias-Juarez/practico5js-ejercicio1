const btnComenzarJuego = document.querySelector(".btnComenzarJuego");
const seccion = document.getElementById("seccion");
let numAleatorio = 0;

function comenzarJuego() {
  numAleatorio = Math.round(Math.random() * 50);
  const titulo = document.createElement("h2");
  titulo.innerHTML = "Adivine el número mágico";
  seccion.appendChild(titulo);
  const input = document.createElement("input");
  input.className = "form-control w-50 my-4";
  seccion.appendChild(input);
  const btnEnviar = document.createElement("button");
  btnEnviar.innerHTML = "Enviar"
  btnEnviar.className = "btn btn-primary"
  seccion.appendChild(btnEnviar);
}

btnComenzarJuego.addEventListener("click", comenzarJuego);
