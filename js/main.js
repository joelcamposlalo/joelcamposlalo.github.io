// Panel lateral desplegable
const btnToggle = document.querySelector(".header__menu--icon");
btnToggle.addEventListener("click", function () {
  document.getElementById("aside").classList.toggle("active");
  document.getElementById("main").classList.toggle("opacity");
  document.getElementById("particles-js").classList.toggle("index");
  document
    .getElementById("btn-toggle")
    .classList.toggle("header__menu--close-icon");
});

// Cerrar panel haciendo click en el main
const panelToggle = document.querySelector("main");
panelToggle.addEventListener("click", function () {
  if (document.getElementById("aside").classList.contains("active")) {
    document.getElementById("aside").classList.toggle("active");
    document.getElementById("main").classList.toggle("opacity");
    document.getElementById("particles-js").classList.toggle("index");
    document
      .getElementById("btn-toggle")
      .classList.remove("header__menu--close-icon");
  }
});

let ToggleA = document.querySelector("a.a"),
  ToggleB = document.querySelector("a.b"),
  ToggleC = document.querySelector("a.c");
ToggleA.addEventListener("click", aClose);
ToggleB.addEventListener("click", aClose);
ToggleC.addEventListener("click", aClose);

function aClose() {
  setTimeout(function () {
    if (document.getElementById("aside").classList.contains("active")) {
      document.getElementById("aside").classList.toggle("active");
      document.getElementById("particles-js").classList.toggle("index");
      document.getElementById("main").classList.toggle("opacity");
      document
        .getElementById("btn-toggle")
        .classList.remove("header__menu--close-icon");
    }
  }, 100);
}

// Header
let scroll = window.pageYOffset;
window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (window.pageYOffset > 0) {
    this.document.getElementById("header").style.background =
      "#51648f";
    this.document.getElementById("header").style.boxShadow =
      "0px 0px 50px 10px rgba(0, 0, 0, 1)";
  } else if (window.pageYOffset == 0) {
    this.document.getElementById("header").style.boxShadow = "none";
    this.document.getElementById("header").style.background = "transparent";
  }
  scroll = desplazamiento_actual;
};
