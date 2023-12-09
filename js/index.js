console.log("dale");

const rataoImg = document.getElementById("ratao-img");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");
const rataoTitulo = document.querySelectorAll(".ratao-titulo");
const section = document.getElementById("section-1");
const main = document.querySelector("main");

section.style.width = "1200px";

let novaCor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

let novoSize = () => {
  return (Math.floor(Math.random() * 100) + 2).toString(16) + "px";
};

btnAumentar.addEventListener("click", () => {
  let novoTamanho = rataoImg.width * 1.2;
  rataoImg.style.width = novoTamanho + "px";
  let widthAtual = rataoImg.width;
  if (widthAtual > 1000) {
    rataoImg.style.width = "500px";
  }

  rataoTitulo[0].style.color = novaCor();
  btnAumentar.style.backgroundColor = novaCor();
  btnDiminuir.style.color = novaCor();
  section.style.backgroundColor = novaCor();
  main.style.backgroundColor = novaCor();
  console.log(novoSize());
  btnDiminuir.style.padding = novoSize();

  localStorage.setItem("width", String(rataoImg.style.width));
});

btnDiminuir.addEventListener("click", () => {
  let novoTamanho = rataoImg.width * 0.8;
  rataoImg.style.width = novoTamanho + "px";
  let widthAtual = rataoImg.width;
  if (widthAtual < 200) {
    rataoImg.style.width = "500px";
  }

  rataoTitulo[0].style.color = novaCor();
  btnDiminuir.style.backgroundColor = novaCor();
  btnAumentar.style.color = novaCor();
  section.style.backgroundColor = novaCor();
  main.style.backgroundColor = novaCor();
  console.log(novoSize());
  btnAumentar.style.padding = novoSize();

  localStorage.setItem("width", String(rataoImg.style.width));
});

const dale = document.querySelector(".ratao-2 div:first-child");
const dale2 = document.querySelector(".ratao-2 div:nth-child(2) ");
const dale3 = document.querySelector(".ratao-2 div:nth-child(3) ");
const dale4 = document.querySelector(".ratao-2 div:nth-child(4) ");

console.log(dale.textContent);
console.log(dale2.textContent);
console.log(dale3.textContent);
console.log(dale4.textContent);

const subtitulo = document.querySelector(".subtitulo");

const checkboxLindo = document.getElementById("checkbox-1");
const checkboxFofinho = document.getElementById("checkbox-2");
const checkboxChave = document.getElementById("checkbox-3");

const labelLindo = document.getElementById("label-1");
const labelFofinho = document.getElementById("label-2");
const labelChave = document.getElementById("label-3");

checkboxLindo.addEventListener("change", () => {
  rataoTitulo[1].style.color = novaCor();
  labelChave.style.backgroundColor = novaCor();
  if (checkboxLindo.checked) {
    subtitulo.textContent = labelLindo.textContent;
    checkboxChave.checked = false;
    checkboxFofinho.checked = false;

    localStorage.setItem("check", "lindo");
    localStorage.setItem("ratao", subtitulo.textContent);
  } else {
    localStorage.setItem("check", "");
    localStorage.setItem("ratao", "");
    subtitulo.textContent = "";
  }
});

checkboxChave.addEventListener("change", () => {
  rataoTitulo[1].style.color = novaCor();
  labelFofinho.style.backgroundColor = novaCor();
  if (checkboxChave.checked) {
    subtitulo.textContent = labelChave.textContent;
    checkboxLindo.checked = false;
    checkboxFofinho.checked = false;

    localStorage.setItem("check", "chave");
    localStorage.setItem("ratao", subtitulo.textContent);
  } else {
    localStorage.setItem("check", "");
    localStorage.setItem("ratao", "");
    subtitulo.textContent = "";
  }
});

checkboxFofinho.addEventListener("change", () => {
  rataoTitulo[1].style.color = novaCor();
  labelLindo.style.backgroundColor = novaCor();
  if (checkboxFofinho.checked) {
    subtitulo.textContent = labelFofinho.textContent;
    checkboxChave.checked = false;
    checkboxLindo.checked = false;
    subtitulo.style.color = novaCor();

    localStorage.setItem("check", "fofinho");
    localStorage.setItem("ratao", subtitulo.textContent);
  } else {
    localStorage.setItem("check", "");
    localStorage.setItem("ratao", "");
    subtitulo.textContent = "";
  }
});

window.onload = () => {
  const subtituloStorage = localStorage.getItem("ratao");
  const checkStorage = localStorage.getItem("check");
  const widthStorage = localStorage.getItem("width");

  rataoImg.style.width = widthStorage;

  if (checkStorage == "fofinho") checkboxFofinho.checked = true;
  if (checkStorage == "chave") checkboxChave.checked = true;
  if (checkStorage == "lindo") checkboxLindo.checked = true;
  subtitulo.textContent = subtituloStorage;
  if (
    (checkboxChave.checked == false) &
    (checkboxFofinho.checked == false) &
    (checkboxLindo == false)
  ) {
    subtitulo.textContent = "";
  }
};
