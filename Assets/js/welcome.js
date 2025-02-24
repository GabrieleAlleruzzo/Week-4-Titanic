const checkbox = document.getElementById("check");
const link = document.getElementById("linkPagina");
link.style.pointerEvents = "none";

checkbox.addEventListener("change", function () {
  if (this.checked) {
    link.style.pointerEvents = "auto";
  } else {
    link.style.pointerEvents = "none";
  }
});
