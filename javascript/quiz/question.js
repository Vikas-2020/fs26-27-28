// const questions = [];

// async function fetchQuestions() {
//   const response = await fetch(
//     "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
//   );
//   const result = await response.json();
//   console.log(result);
//   questions.push(result.results);
// }
const questions = [
  {
    q: "2+2",
    opt: [1, 2, 3, 4],
    correct: 4,
  },

  {
    q: "2*2*2-8",
    opt: [8, 0, -2, 1],
    correct: 0,
  },

  {
    q: "3+3+3",
    opt: [0, 333, 6, 9],
    correct: 9,
  },

  {
    q: "4*4/4",
    opt: [4, 0, 8, 16],
    correct: 4,
  },
];
// fetchQuestions();

export default questions;
