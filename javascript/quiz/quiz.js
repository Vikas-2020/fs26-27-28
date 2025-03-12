import questions from "./question.js";

const name = document.querySelector("#name");
const startBtn = document.querySelector("#start");
const detailsDiv = document.querySelector("#details");
const quizDiv = document.querySelector("#quiz");
const questionDiv = document.querySelector(".question");
const timerDiv = document.querySelector(".timer");
const scoreDiv = document.querySelector(".score");
const optionPara = document.querySelectorAll(".option");
let score = 0;

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
  if (!questions[currentQuestionNumber].hasImage) {
    questionDiv.innerText = questions[currentQuestionNumber].q;

    optionPara.forEach((para, index) => {
      //RESET THE BACKGROUND
      removeColor(para);

      //ENABLE OPTIONS AGAIN
      para.classList.remove("disabled");

      para.innerText = questions[currentQuestionNumber].opt[index];
    });
  } else {
    //QUESTION CONTAIN IMAGES
    questionDiv.innerText = questions[currentQuestionNumber].q;

    optionPara.forEach((para, index) => {
      const image = document.createElement("img");
      image.src = "assets/" + questions[currentQuestionNumber].opt[index];
      para.append(image);
    });
  }
}

optionPara.forEach((para) => {
  //REGISTER CLICK EVENT
  para.addEventListener("click", (e) => {
    calculateScore(e);

    //ONCE CLICKED & REGISTERED, DISABLED ALL THE OPTIONS
    disableOptions();
  });
});

function disableOptions() {
  optionPara.forEach((para) => para.classList.add("disabled"));
}

function calculateScore(e) {
  // console.log(e.target.innerText);
  console.log(
    questions[currentQuestionNumber].correct,
    Number(e.target.innerText)
  );
  if (questions[currentQuestionNumber].correct === Number(e.target.innerText)) {
    score++;
    applyColor(e.target, "correct");
  } else applyColor(e.target, "incorrect");
}

function removeColor(element) {
  element.classList.remove("correct", "incorrect");
}

function applyColor(element, ansValue) {
  ansValue === "correct"
    ? element.classList.add("correct")
    : element.classList.add("incorrect");
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
        appendScoreInLS();
        displayScore();
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

function appendScoreInLS() {
  const playersArray = JSON.parse(localStorage.getItem("players"));
  playersArray[playersArray.length - 1].score = score;
  localStorage.setItem("players", JSON.stringify(playersArray));
}

function displayScore() {
  const h2 = document.createElement("h2");
  h2.innerText = "Your score is " + score;
  scoreDiv.append(h2);
}
