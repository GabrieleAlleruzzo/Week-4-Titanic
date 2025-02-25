const star = document.querySelectorAll(".fa-solid.fa-star");
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    for (let x = 0; x <= i; x++) {
      star[x].classList.add("hover");
    }
  });
}
