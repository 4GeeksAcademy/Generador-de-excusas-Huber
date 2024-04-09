/* eslint-disable no-undef */
let who = ["El perro", "Mi abuela", "Mi tío", "El policia", "Mi profesor"];
let what = ["se comió", "aplastó", "robó", "rompió", "ensució"];
let when = [
  "antes de clases",
  "justo cuando terminé",
  "mientras comia",
  "mientras yo corria"
];

function excuseGenerator(quien, que, cuando) {
  // eslint-disable-next-line no-undef

  numQuien = Math.floor(Math.random() * quien.length);
  // eslint-disable-next-line no-undef
  numQue = Math.floor(Math.random() * que.length);
  // eslint-disable-next-line no-undef
  numCuando = Math.floor(Math.random() * cuando.length);
  return (
    // eslint-disable-next-line no-undef
    quien[numQuien] +
    " " +
    // eslint-disable-next-line no-undef
    que[numQue] +
    " " +
    "mi tarea" +
    " " +
    cuando[numCuando]
  );
}
function onLoad() {
  document.getElementById("excuse").innerHTML = excuseGenerator(
    who,
    what,
    when
  );
}
window.onload = onLoad;
