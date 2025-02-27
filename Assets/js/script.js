const questions = [
  {
    number: 1,
    category: "Sport: Soccer",
    type: "multiple",
    difficulty: "Easy",
    question:
      "Nel calcio, quale tipo di rimessa in gioco viene effettuata dopo che la squadra avversaria ha fatto uscire il pallone da una linea di porta?",
    correct_answer: "A. Calcio di rinvio",
    incorrect_answers: [
      "B. Corner",
      "C. Calcio di punizione",
      "D. Tocco di mano",
    ],
  },
  {
    number: 2,
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "Easy",
    question: "Dove si trova la Sagrada Familia?",
    correct_answer: "A. Barcellona",
    incorrect_answers: ["B. Madrid", "C. Siviglia", "D. Venezia"],
  },
  {
    number: 3,
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "Easy",
    question: "Qual è la capitale del Portogallo?",
    correct_answer: "C. Lisbona",
    incorrect_answers: ["A. Porto", "B. Salamanca", "D. Berlino"],
  },
  {
    number: 4,
    category: "Nature: Animals",
    type: "multiple",
    difficulty: "Medium",
    question: "Qual è il nome comune della Balaenoptera musculus?",
    correct_answer: "D. Balenottera azzurra",
    incorrect_answers: ["A. Squalo bianco", "B. Balena", "C. Beluga"],
  },
  {
    number: 5,
    category: "Art: Music",
    type: "multiple",
    difficulty: "Medium",
    question: "Quanti tasti ci sono su un pianoforte?",
    correct_answer: "C. 88",
    incorrect_answers: ["A. 80", "B. 100", "D. 62"],
  },
  {
    number: 6,
    category: "Histori: Rome",
    type: "multiple",
    difficulty: "Medium",
    question: "Di chi era figlio adottivo l'imperatore Augusto?",
    correct_answer: "B. Giulio Cesare",
    incorrect_answers: ["A. Diogene", "C. Nerone", "D. Marco Antonio"],
  },
  {
    number: 7,
    category: "Science: World",
    type: "multiple",
    difficulty: "Medium",
    question:
      "Qual è il pianeta gassoso più voluminoso del nostro Sistema Solare?",
    correct_answer: "D. Giove",
    incorrect_answers: ["A. Saturno", "B. Urano", "C. Nettuno"],
  },
  {
    number: 8,
    category: "Art: Music",
    type: "multiple",
    difficulty: "Easy",
    question: "Chi ha vinto il festival di Sanremo 2025?",
    correct_answer: "C. Olly",
    incorrect_answers: ["A. Marcella Bella", "B. Topo Gigio", "D. Lucio Corsi"],
  },
  {
    number: 9,
    category: "Art: Literature",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Qual è il nome di Madame Bovary, personaggio eponimo del romanzo di Flaubert?",
    correct_answer: "B. Emma",
    incorrect_answers: ["A. Marie", "C. Julie", "D. Héloïse"],
  },
  {
    number: 10,
    category: "Hobbies: Toys",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Qual è stato il primo giocattolo a essere pubblicizzato in televisione?",
    correct_answer: "C. Mr Potato",
    incorrect_answers: ["A. Barbie", "B. Domino", "D. Polly Pocket"],
  },
];

let timerNumber = document.getElementById("timerNumber");
let seconds = 30;
let donutLine = document.getElementById("donut-line");
let startTime;
let timerAnimationFrame;

const circleTimer = () => {
  let now = Date.now();
  let elapsed = Math.floor((now - startTime) / 1000);
  let remaining = seconds - elapsed;

  if (remaining >= 0) {
    timerNumber.textContent = remaining;
    let percentage = (remaining / 30) * 100;

    if (remaining < 10) {
      donutLine.style.background = `conic-gradient(#ff0000 0% ${percentage}%,rgba(255, 255, 255, 0.5) ${percentage}% 100%)`;
    } else {
      donutLine.style.background = `conic-gradient(#00ffff 0% ${percentage}%,rgba(255, 255, 255, 0.5) ${percentage}% 100%)`;
    }

    timerAnimationFrame = requestAnimationFrame(circleTimer);
  } else {
    cancelAnimationFrame(timerAnimationFrame);
    console.log("Tempo scaduto");
    donutLine.style.background =
      "conic-gradient(rgba(255, 255, 255, 0.5) 0% 100%)";
  }
};

window.onload = function () {
  updateQuestion(0); // Aggiungi questa chiamata per aggiornare la domanda iniziale
  startTime = Date.now();
  timerAnimationFrame = requestAnimationFrame(circleTimer);
};

const resetTimer = () => {
  cancelAnimationFrame(timerAnimationFrame);
  seconds = 30;
  timerNumber.textContent = seconds;
  donutLine.style.background = "conic-gradient(#00ffff 0% 100%)";
  startTime = Date.now();
  timerAnimationFrame = requestAnimationFrame(circleTimer);
};

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
const h2Question = document.getElementById("question");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const questionNumber = document.getElementById("questionNumber");

let ansTrue = 0;
let currentQuestion = 0;

difficulty.innerText = `Difficulty: ${questions[0].difficulty}`;
category.innerText = `Category: ${questions[0].category}`;
h2Question.innerText = questions[0].question;
questionNumber.innerText = questions[0].number;

function updateQuestion(questionIndex) {
  console.log("Aggiorno la domanda:", questionIndex);

  if (questionIndex >= questions.length) {
    fine();
    return;
  }

  resetTimer();
  difficulty.innerText = `Difficulty: ${questions[questionIndex].difficulty}`;
  category.innerText = `Category: ${questions[questionIndex].category}`;
  h2Question.innerText = questions[questionIndex].question;
  questionNumber.innerText = questions[questionIndex].number;

  const correctAnswer = questions[questionIndex].correct_answer;
  const incorrectAnswers = questions[questionIndex].incorrect_answers;

  const answers = [correctAnswer, ...incorrectAnswers];
  const orderedAnswers = [
    answers.find((a) => a.startsWith("A")),
    answers.find((a) => a.startsWith("B")),
    answers.find((a) => a.startsWith("C")),
    answers.find((a) => a.startsWith("D")),
  ];

  ans1.innerText = orderedAnswers[0];
  ans2.innerText = orderedAnswers[1];
  ans3.innerText = orderedAnswers[2];
  ans4.innerText = orderedAnswers[3];
}
function fine() {
  if (currentQuestion === questions.length || seconds === 0) {
    localStorage.setItem("ansTrue", ansTrue);
    window.location.assign("results.html");
  }
}

ans1.addEventListener("click", function () {
  if (ans1.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  console.log("Risposta selezionata per la domanda:", currentQuestion);
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

ans2.addEventListener("click", function () {
  if (ans2.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  console.log("Risposta selezionata per la domanda:", currentQuestion);
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

ans3.addEventListener("click", function () {
  if (ans3.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  console.log("Risposta selezionata per la domanda:", currentQuestion);
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

ans4.addEventListener("click", function () {
  if (ans4.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  console.log("Risposta selezionata per la domanda:", currentQuestion);
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});
