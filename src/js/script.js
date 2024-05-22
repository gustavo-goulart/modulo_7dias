const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-form");

function mostrarForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function fecharForm() {
  form.style.left = "-295px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}
