const questions = [
  {
    category: "Sport: Soccer",
    type: "multiple",
    difficulty: "easy",
    question:
      "Nel calcio, quale tipo di rimessa in gioco viene effettuata dopo che la squadra avversaria ha fatto uscire il pallone da una linea di porta?",
    correct_answer: "a. Calcio di rinvio",
    incorrect_answers: [
      "b. Corner",

      "c. Calcio di punizione",

      "d. Tocco di mano",
    ],
  },
  {
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "easy",
    question: "Dove si trova la Sagrada Familia?",
    correct_answer: "a.Barcellona",
    incorrect_answers: ["b.Madrid", "c.Siviglia", "d.Venezia"],
  },
  {
    category: "Geo: Countries",
    type: "multiple",
    difficulty: "easy",
    question: "Qual è la capitale del Portogallo?",
    correct_answer: "c.Lisbona",
    incorrect_answers: ["a.Porto", "b.Salamanca", "d.Berlino"],
  },
  {
    category: "Nature: Animals",
    type: "multiple",
    difficulty: "medium",
    question: "Qual è il nome comune della Balaenoptera musculus??",
    correct_answer: "d. Balenottera azzurra",
    incorrect_answers: ["a. Squalo bianco", "b. Balena", "c. Beluga"],
  },
  {
    category: "Art: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Quanti tasti ci sono su un pianoforte?",
    correct_answer: "c. 88",
    incorrect_answers: ["a. 80", "b. 100", "d. 62"],
  },

  {
    category: "Histori: Rome",
    type: "multiple",
    difficulty: "medium",
    question: "Di chi era figlio adottivo l'imperatore Augusto?",
    correct_answer: "b. Giulio Cesare",
    incorrect_answers: ["a. Diogene", "c. Nerone", "d. Marco Antonio"],
  },
  {
    category: "Science: World",
    type: "multiple",
    difficulty: ",medium",
    question:
      "Qual è il pianeta gassoso più voluminoso del nostro Sistema Solare?",
    correct_answer: "d.Giove",
    incorrect_answers: ["a. Saturno", "b. Urano", "c. Nettuno"],
  },

  {
    category: "Art: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Chi ha vinto il festival di Sanremo 2025?",
    correct_answer: "c.Olly",
    incorrect_answers: ["a.Marcella Bella", "b.Topo Gigio", "d.Lucio Corsi"],
  },
  {
    category: "Art: Literature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Qual è il nome di Madame Bovary, personaggio eponimo del romanzo di Flaubert?",
    correct_answer: "b. Emma  ",
    incorrect_answers: ["a. Marie", "c. Julie", "d. Héloïse"],
  },
  {
    category: "Hobbies: Toys",
    type: "multiple",
    difficulty: "hard",
    question:
      "Qual è stato il primo giocattolo a essere pubblicizzato in televisione?",
    correct_answer: "c.Mr Potato",
    incorrect_answers: ["a. Barbie", "b.Domino", "d. Polly Pocket"],
  },
];

let timeNumber = document.getElementById("timerNumber");
let seconds = 30;

const circleTimer = () => {
  if (seconds > 0) {
    seconds--;
    timerNumber.textContent = seconds;
  } else {
    clearInterval(timerInterval);
    console.log("Timer finito!");
    //aggiungere qualcosa del genere per passare a un'altra domanda
    //questionNumber += 1
    // removeQuestions()
  }
};
let timerInterval = setInterval(circleTimer, 1000);
window.onload = function () {
  circleTimer();
};
