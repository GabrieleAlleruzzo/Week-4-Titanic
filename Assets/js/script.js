const questions = [
  {
    number: 1,
    category: "Sport: Soccer",
    type: "multiple",
    difficulty: "easy",
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
    difficulty: "easy",
    question: "Dove si trova la Sagrada Familia?",
    correct_answer: "A. Barcellona",
    incorrect_answers: { b: "B. Madrid", c: "C. Siviglia", d: "D. Venezia" },
  },
  {
    number: 3,
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "easy",
    question: "Qual è la capitale del Portogallo?",
    correct_answer: "C.Lisbona",
    incorrect_answers: { a: "A. Porto", b: "B. Salamanca", d: "D. Berlino" },
  },
  {
    number: 4,
    category: "Nature: Animals",
    type: "multiple",
    difficulty: "medium",
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
    difficulty: "medium",
    question: "Quanti tasti ci sono su un pianoforte?",
    correct_answer: "C. 88",
    incorrect_answers: { a: "A. 80", b: "B. 100", d: "D. 62" },
  },

  {
    number: 6,
    category: "Histori: Rome",
    type: "multiple",
    difficulty: "medium",
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
    difficulty: ",medium",
    question:
      "Qual è il pianeta gassoso più voluminoso del nostro Sistema Solare?",
    correct_answer: "D.Giove",
    incorrect_answers: { a: "A. Saturno", b: "B. Urano", c: "C. Nettuno" },
  },

  {
    number: 8,
    category: "Art: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Chi ha vinto il festival di Sanremo 2025?",
    correct_answer: "C.Olly",
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
    difficulty: "hard",
    question:
      "Qual è il nome di Madame Bovary, personaggio eponimo del romanzo di Flaubert?",
    correct_answer: "B. Emma  ",
    incorrect_answers: { a: "A. Marie", c: "C. Julie", d: "D. Héloïse" },
  },
  {
    number: 10,
    category: "Hobbies: Toys",
    type: "multiple",
    difficulty: "hard",
    question:
      "Qual è stato il primo giocattolo a essere pubblicizzato in televisione?",
    correct_answer: "C.Mr Potato",
    incorrect_answers: { a: "A. Barbie", b: "B. Domino", d: "D. Polly Pocket" },
  },
];

// TIMER

let container = document.querySelector(".container");
let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let num = 360;

const minute = 1;
let duration = minute * 60;

let interval = setInterval(() => {
  if (duration >= 0) {
    min.textContent = `0${Math.floor(duration / 60)}`;
    if (duration % 60 < 10) {
      sec.textContent = `0${duration % 60}`;
    } else {
      sec.textContent = `${duration % 60}`;
    }

    container.style.setProperty("--a", num + "deg");

    const a = container.style.getPropertyValue("--a");
    console.log(a);

    container.style.background = ` conic-gradient(#00ffff var(--a) ,#00ffff 0deg ,#ffffffd5 0deg,#ffffffd5 360deg)`;
    num = num - num / duration;
    duration--;
  } else {
    clearInterval(interval);
  }
}, 1000);

// END TIMER

const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const h2Question = document.getElementById("question");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer");

const ansTrue = 0;

let currentQuestion = 0;

ans1.innerText = questions[0].correct_answer;
ans2.innerText = questions[0].incorrect_answers.b;
ans3.innerText = questions[0].incorrect_answers.c;
ans4.innerText = questions[0].incorrect_answers.d;

difficulty.innerText = questions[0].difficulty;

category.innerText = questions[0].category;

h2Question.innerText = questions[0].question;

questionNumber.innerText = questions[0].number;

function updateQuestion(questionIndex) {
  ans1.innerText = questions[questionIndex].correct_answer;
  ans2.innerText = questions[questionIndex].incorrect_answers.b;
  ans3.innerText = questions[questionIndex].incorrect_answers.c;
  ans4.innerText = questions[questionIndex].incorrect_answers.d;

  difficulty.innerText = questions[questionIndex].difficulty;
  category.innerText = questions[questionIndex].category;
  h2Question.innerText = questions[questionIndex].question;
  questionNumber.innerText = questions[questionIndex].number;
}

ans1.addEventListener("click", function () {
  if (ans1.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  currentQuestion++;

  updateQuestion(currentQuestion);
});

ans2.addEventListener("click", function () {
  if (ans2.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  currentQuestion++;

  updateQuestion(currentQuestion);
});

ans3.addEventListener("click", function () {
  if (ans3.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  currentQuestion++;

  updateQuestion(currentQuestion);
});

ans4.addEventListener("click", function () {
  if (ans4.innerText === questions[currentQuestion].correct_answer) {
    ansTrue++;
  }
  currentQuestion++;

  updateQuestion(currentQuestion);
});
