const btnComenzarJuego = document.querySelector(".btnComenzarJuego");
const form = document.getElementById("form");
let numAleatorio = 0;

function comenzarJuego() {
  btnComenzarJuego.className = "ocultarBoton";
  numAleatorio = Math.round(Math.random() * 50);
  console.log(numAleatorio);

  const titulo = document.createElement("h2");
  titulo.innerHTML = "Adivine el número mágico";
  form.appendChild(titulo);

  const input = document.createElement("input");
  console.log(input.value);
  input.className = "form-control w-100 my-4";
  form.appendChild(input);

  const btnEnviar = document.createElement("button");
  btnEnviar.innerHTML = "Enviar";
  btnEnviar.className = "btn btn-primary";
  form.appendChild(btnEnviar);
  const adivinarNumero = (e) => {
    e.preventDefault();
    if (input.value == numAleatorio) {
      alert("¡Adivinaste el número mágico!");
    } else if (input.value > numAleatorio) {
      alert("El número ingresado es mayor al número mágico");
    } else {
      alert("El número ingresado es menor al número mágico");
    }
  };
  btnEnviar.addEventListener("click", adivinarNumero);
}

btnComenzarJuego.addEventListener("click", comenzarJuego);
