import questions from "./question.js";

const name = document.querySelector("#name");
const startBtn = document.querySelector("#start");
const detailsDiv = document.querySelector("#details");
const quizDiv = document.querySelector("#quiz");
const questionDiv = document.querySelector(".question");
const timerDiv = document.querySelector(".timer");
const scoreDiv = document.querySelector(".score");
const optionPara = document.querySelectorAll(".option");

const players =
  localStorage.getItem("players") !== null
    ? JSON.parse(localStorage.getItem("players"))
    : [];
let currentQuestionNumber = 0;
let timer = 5;

startBtn.addEventListener("click", startTheQuiz);

function startTheQuiz() {
  storeDataInLS();
  quizDiv.classList.remove("hidden");
  detailsDiv.classList.add("hidden");
  nextQuestion();
  timerDiv.innerText = timer;
  createTimer();
}

function storeDataInLS() {
  const player = {
    name: name.value,
    date: new Date().toLocaleString(),
    score: 0,
  };
  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));
}

function nextQuestion() {
  questionDiv.innerText = questions[currentQuestionNumber].q;
  optionPara.forEach((para, index) => {
    para.innerText = questions[currentQuestionNumber].opt[index];
  });
}

function createTimer() {
  const id = setInterval(() => {
    if (timer > 1) {
      timerDiv.innerText = --timer;
    } else {
      //CHECK IF QUESTIONS EXHAUSTED
      if (currentQuestionNumber >= questions.length - 1) {
        clearInterval(id);
        quizDiv.classList.add("hidden");
        scoreDiv.classList.remove("hidden");
        calculateScore();
      } else {
        //RESET THE TIMER
        timer = 5;
        timerDiv.innerText = timer;

        //CHANGE QUESTION ON SCREEN
        currentQuestionNumber++;
        nextQuestion();
      }
    }
  }, 1000);
}

function calculateScore() {
  const h2 = document.createElement("h2");
  h2.innerText = "Your score is ";
  scoreDiv.append(h2);
}
