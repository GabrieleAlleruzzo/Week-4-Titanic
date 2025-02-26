const questions = [
  {
    number: 1,
    category: "Sport: Soccer",
    type: "multiple",
    difficulty: "Easy",
    question:
      "Nel calcio, quale tipo di rimessa in gioco viene effettuata dopo che la squadra avversaria ha fatto uscire il pallone da una linea di porta?",
    correct_answer: "A. Calcio di rinvio",
    incorrect_answers: {
      b: "B. Corner",
      c: "C. Calcio di punizione",
      d: "D. Tocco di mano",
    },
  },
  {
    number: 2,
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "Easy",
    question: "Dove si trova la Sagrada Familia?",
    correct_answer: "A. Barcellona",
    incorrect_answers: { b: "B. Madrid", c: "C. Siviglia", d: "D. Venezia" },
  },
  {
    number: 3,
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "Easy",
    question: "Qual è la capitale del Portogallo?",
    correct_answer: "C. Lisbona",
    incorrect_answers: { a: "A. Porto", b: "B. Salamanca", d: "D. Berlino" },
  },
  {
    number: 4,
    category: "Nature: Animals",
    type: "multiple",
    difficulty: "Medium",
    question: "Qual è il nome comune della Balaenoptera musculus??",
    correct_answer: "D. Balenottera azzurra",
    incorrect_answers: {
      a: "A. Squalo bianco",
      b: "B. Balena",
      c: "C. Beluga",
    },
  },
  {
    number: 5,
    category: "Art: Music",
    type: "multiple",
    difficulty: "Medium",
    question: "Quanti tasti ci sono su un pianoforte?",
    correct_answer: "C. 88",
    incorrect_answers: { a: "A. 80", b: "B. 100", d: "D. 62" },
  },

  {
    number: 6,
    category: "Histori: Rome",
    type: "multiple",
    difficulty: "Medium",
    question: "Di chi era figlio adottivo l'imperatore Augusto?",
    correct_answer: "B. Giulio Cesare",
    incorrect_answers: {
      a: "A. Diogene",
      c: "C. Nerone",
      d: "D. Marco Antonio",
    },
  },
  {
    number: 7,
    category: "Science: World",
    type: "multiple",
    difficulty: "Medium",
    question:
      "Qual è il pianeta gassoso più voluminoso del nostro Sistema Solare?",
    correct_answer: "D. Giove",
    incorrect_answers: { a: "A. Saturno", b: "B. Urano", c: "C. Nettuno" },
  },

  {
    number: 8,
    category: "Art: Music",
    type: "multiple",
    difficulty: "Easy",
    question: "Chi ha vinto il festival di Sanremo 2025?",
    correct_answer: "C. Olly",
    incorrect_answers: {
      a: "A. Marcella Bella",
      b: "B. Topo Gigio",
      d: "D. Lucio Corsi",
    },
  },
  {
    number: 9,
    category: "Art: Literature",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Qual è il nome di Madame Bovary, personaggio eponimo del romanzo di Flaubert?",
    correct_answer: "B. Emma  ",
    incorrect_answers: { a: "A. Marie", c: "C. Julie", d: "D. Héloïse" },
  },
  {
    number: 10,
    category: "Hobbies: Toys",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Qual è stato il primo giocattolo a essere pubblicizzato in televisione?",
    correct_answer: "C. Mr Potato",
    incorrect_answers: { a: "A. Barbie", b: "B. Domino", d: "D. Polly Pocket" },
  },
  {
    number: 11,
    category: "Hobbies: Toys",
    type: "multiple",
    difficulty: "Hard",
    question:
      "Qual è stato il primo giocattolo a essere pubblicizzato in televisione?",
    correct_answer: "C. Mr Potato",
    incorrect_answers: { a: "A. Barbie", b: "B. Domino", d: "D. Polly Pocket" },
  },
];

let timerNumber = document.getElementById("timerNumber");
let seconds = 30;
let donutLine = document.getElementById("donut-line");
let timerInterval;

const circleTimer = () => {
  if (seconds > 0) {
    seconds--;
    timerNumber.textContent = seconds;
    let percentage = (seconds / 30) * 100;

    // Cambia il colore del timer quando scende sotto i 10 secondi
    if (seconds < 10) {
      donutLine.style.background = `conic-gradient(#ff0000 0% ${percentage}%, #e0b5d3 ${percentage}% 100%)`;
    } else {
      donutLine.style.background = `conic-gradient(#00ffff 0% ${percentage}%, #e0b5d3 ${percentage}% 100%)`;
    }
  } else {
    clearInterval(timerInterval);
    console.log("Tempo scaduto");
    donutLine.style.background = "conic-gradient(#e0b5d3 0% 100%)";
  }
};

window.onload = function () {
  timerInterval = setInterval(circleTimer, 1000);
};

const resetTimer = () => {
  clearInterval(timerInterval);
  seconds = 30;
  timerNumber.textContent = seconds;
  donutLine.style.background = "conic-gradient(#00ffff 0% 100%)";
  timerInterval = setInterval(circleTimer, 1000);
};

let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
const h2Question = document.getElementById("question");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer");

let ansTrue = 0;
let currentQuestion = 0;

ans1.innerText = questions[0].correct_answer;
ans2.innerText = questions[0].incorrect_answers.c;
ans3.innerText = questions[0].incorrect_answers.b;
ans4.innerText = questions[0].incorrect_answers.d;

difficulty.innerText = `Difficulty: ${questions[0].difficulty}`;
category.innerText = `Category: ${questions[0].category}`;
h2Question.innerText = questions[0].question;
questionNumber.innerText = questions[0].number;

function updateQuestion(questionIndex) {
  if (questionIndex >= questions.length) {
    fine();
    return;
  }

  resetTimer();
  difficulty.innerText = `Difficulty: ${questions[questionIndex].difficulty}`;
  category.innerText = `Category: ${questions[questionIndex].category}`;
  h2Question.innerText = questions[questionIndex].question;
  questionNumber.innerText = questions[questionIndex].number;

  ans1.innerText = questions[questionIndex].correct_answer;
  ans2.innerText = questions[questionIndex].incorrect_answers.a;
  ans3.innerText = questions[questionIndex].incorrect_answers.b;
  ans4.innerText = questions[questionIndex].incorrect_answers.c;
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
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

ans2.addEventListener("click", function () {
  if (ans2.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

ans3.addEventListener("click", function () {
  if (ans3.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

ans4.addEventListener("click", function () {
  if (ans4.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  localStorage.setItem("ansTrue", ansTrue);
  currentQuestion++;
  fine();
  updateQuestion(currentQuestion);
});

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
