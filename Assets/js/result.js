let ansTrueAvanza = localStorage.getItem("ansTrue");
let pCorrect = document.getElementById("Correct");
let pWrong = document.getElementById("Wrong");
let percLeft = document.getElementById("percentage-left");
let percRight = document.getElementById("percentage-right");

if (ansTrueAvanza !== null) {
  ansTrueAvanza = parseInt(ansTrueAvanza, 10);
  if (isNaN(ansTrueAvanza)) {
    ansTrueAvanza = 0;
  }

  const totalQuestions = 10;
  const correctPercentage = (ansTrueAvanza / totalQuestions) * 100;
  const wrongPercentage = 100 - correctPercentage;

  pCorrect.innerText = `${ansTrueAvanza}/10 questions`;
  pWrong.innerText = `${totalQuestions - ansTrueAvanza}/10 questions`;
  percLeft.innerText = `${correctPercentage.toFixed(2)}%`;
  percRight.innerText = `${wrongPercentage.toFixed(2)}%`;
} else {
  pCorrect.innerText = "0/10 questions";
  pWrong.innerText = "10/10 questions";
  percLeft.innerText = "0%";
  percRight.innerText = "100%";
}
