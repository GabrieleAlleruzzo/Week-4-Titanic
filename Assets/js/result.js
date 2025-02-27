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
  },
});

let bocciato = document.querySelector("strong#Congratulations");
let azzurro = document.getElementById("azzurro");
let descrizione = document.querySelector("p#descrizione");

let esame = function (ans) {
  ans = ansTrueAvanza;
  if (ans < 6) {
    azzurro.innerText = `You not passed the exam`;
    bocciato.innerText = "Failed!";

    descrizione.innerText = "Retry the exam for the qualification";
  } else {
    bocciato.innerText = "Congratulations!";
    azzurro.innerText = "You passed the exam.";
    descrizione.innerText = `We'll send you the certificate in a few minutes. check your email
  (including promotions/spam folder)`;
  }
};
esame();

/*if (ansTrueAvanza < 6) {
  bocciato.innerText = "Failed!";
} else {
  bocciato.innerText = "Congratulations!";
  console.log("ciao");
}

if (ansTrueAvanza < 6) {
  azzurro.innnerText = "You not passed the exam.";console.log("ss");
} else {
  azzurro.innerText = "You passed the exam.";
  
}

if (ansTrueAvanza < 6) {
  descrizione.innerText = "Retry the exam for the qualification";
} else {
  descrizione.innerText = `We'll send you the certificate in a few minutes. check your email
  (including promotions/spam folder)`;
  console.log("ee");
}*/
