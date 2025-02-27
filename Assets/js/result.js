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
let g = ansTrueAvanza * 10;
let d = (10 - ansTrueAvanza) * 10;
var xValues = ["Right", "Wrong"];
var yValues = [d, g];
var barColors = ["#d20094", "#00ffff"];

var chartCanvas = document.getElementById("myChart");
chartCanvas.width = 600;
chartCanvas.height = 600;
chartCanvas.style.filter = "drop-shadow(0px 0px 20px rgba(0, 2, 46, 0.8))";

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: ["Wrong", "Correct"],
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutoutPercentage: 70,
    title: {
      display: false,

      text: "Results",
    },
    legend: {
      display: false,
    },
  },
});

let bocciato = document.querySelector("strong#Congratulations");
let azzurro = document.getElementById("azzurro");
let descrizione = document.querySelector("p#descrizione");

let esame = function (ans) {
  ans = ansTrueAvanza;
  if (ans < 6) {
    azzurro.innerText = `You did not passed the quiz.

    YOU CAN'T PAY FOR EPICODE'S COURSE!`;
    bocciato.innerText = "FAILED!";

    descrizione.innerText =
      "Don't worry and retake the quiz when you are more ready (in a few years)";
  } else {
    bocciato.innerText = "Congratulations!";
    azzurro.innerText = "You passed the QUIZ.";
    descrizione.innerText = `We'll send you the certificate in a few minutes. 

    YOU ARE A VERY GOOD PLAYER!`;
  }
};
esame();
