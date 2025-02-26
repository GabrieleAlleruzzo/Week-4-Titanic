/*const star = document.querySelectorAll(".fa-solid.fa-star");
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    for (let x = 0; x <= i; x++) {
      star[x].classList.add("hover");
      // star[x].classList.toggle("hover"); 
    }
  });
}
*/

const star = document.querySelectorAll(".fa-solid.fa-star");
let lastSelected = -1;
//aggiungo evento clcik
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    if (i === 0 && lastSelected === 0) {
      star[0].classList.remove("hover");
      lastSelected = -1;
    }
    //deseleziona la classe hover
    else if (i === lastSelected) {
      for (let x = i + 1; x < star.length; x++) {
        star[x].classList.remove("hover");
      }
      lastSelected = i - 1;
    }

    //seleziona la classe hover
    else {
      for (let x = 0; x <= i; x++) {
        star[x].classList.add("hover");
      }
    }
    //deseleziona stelle successive
    for (let x = i + 1; x < star.length; x++) {
      star[x].classList.remove("hover");
    }
    lastSelected = i;
  });

  star[i].addEventListener("mouseover", function () {
    for (let x = 0; x <= i; x++) {
      star[x].classList.add("hover");
    }
  });

  star[i].addEventListener("mouseout", function () {
    for (let x = 0; x < star.length; x++) {
      if (x <= lastSelected) {
        star[x].classList.add("hover");
      } else {
        star[x].classList.remove("hover");
      }
    }
  });
}
