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
window.addEventListener("load", function () {
  const isChecked = localStorage.getItem("isChecked") === "true";
  checkbox.checked = isChecked;
  link.style.pointerEvents = isChecked ? "auto" : "none";
});
