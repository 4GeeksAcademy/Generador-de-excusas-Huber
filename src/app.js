/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["El perro", "Mi abuela", "Mi tío", "El policia", "Mi profesor"];

  let accion = ["se comió", "aplastó", "robó", "rompió", "ensució"];

  let que = ["mi tarea", "mi lap top", "el celular", "mi libro", "la tv"];

  let cuando = [
    "antes de clases",
    "justo cuando termine",
    "mientras comia",
    "mientras yo corria"
  ];

  function generarExcusa() {
    let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
    let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    let queAleatoria = que[Math.floor(Math.random() * que.length)];
    let cuandoAleatoria = cuando[Math.floor(Math.random() * cuando.length)];

    let excusa =
      quienAleatorio +
      " " +
      accionAleatoria +
      " " +
      queAleatoria +
      " " +
      cuandoAleatoria +
      ".";

    return excusa;
  }

  let elementoExcusa = document.getElementById("excuse");

  elementoExcusa.innerHTML = generarExcusa();
};

document.getElementById("reloadButton").addEventListener("click", function() {
  location.reload();
});
