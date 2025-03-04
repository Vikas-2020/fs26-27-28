const form = document.querySelector("form");
const leaderBoardDiv = document.querySelector("#leaderBoard");
// console.log(document.forms);
const elements = Array.from(document.forms[0].elements);
elements.pop();
let leaderBoard = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    id: leaderBoard.length,
    fname: elements[0].value,
    lname: elements[1].value,
    country: elements[2].value,
    score: elements[3].value,
  };
  leaderBoard.push(obj);

  console.log(leaderBoard);

  //clearing the form
  clearForm();

  //sorting the leaderBoard
  sortLeaderBoard();

  //print values on the DOM
  printLeaderBoard();
});

function clearForm() {
  elements.forEach((element) => (element.value = ""));
  elements[0].focus();
}

function sortLeaderBoard() {
  leaderBoard.sort((a, b) => {
    return b.score - a.score;
  });
}

function printLeaderBoard() {
  leaderBoardDiv.innerHTML = "";
  const fragment = document.createDocumentFragment();
  leaderBoard.forEach((obj) => {
    console.log(obj);
    const parent = document.createElement("div");
    const name = document.createElement("p");
    const country = document.createElement("p");
    const score = document.createElement("p");
    const actions = document.createElement("p");
    const del = document.createElement("span");
    const plus5 = document.createElement("span");
    const minus5 = document.createElement("span");

    parent.classList.add("parent");

    name.innerText = `${obj.fname} ${obj.lname}`;
    country.innerText = `${obj.country}`;
    score.innerText = `${obj.score}`;

    del.classList.add("fa-solid", "fa-trash");
    del.addEventListener("click", () => deleteData(obj.id));

    actions.classList.add("actions");

    plus5.innerText = "+5";
    minus5.innerText = "-5";

    plus5.addEventListener("click", () => modifyScore(obj.id, "+"));
    minus5.addEventListener("click", () => modifyScore(obj.id, "-"));

    actions.append(del, plus5, minus5);

    parent.append(name, country, score, actions);
    fragment.append(parent);
  });
  leaderBoardDiv.append(fragment);
}

function deleteData(idToDelete) {
  leaderBoard = leaderBoard.filter((existingData) => {
    return existingData.id !== idToDelete;
  });
  //sorting the leaderBoard
  sortLeaderBoard();
  //print values on the DOM
  printLeaderBoard();
}

function modifyScore(idToModify, sign) {
  if (sign === "+") {
    leaderBoard.map((existingData) => {
      if (existingData.id === idToModify)
        existingData.score = Number(existingData.score) + 5;
    });
  } else {
    leaderBoard.map((existingData) => {
      if (existingData.id === idToModify)
        existingData.score = Number(existingData.score) - 5;
    });
  }

  //sorting the leaderBoard
  sortLeaderBoard();

  //print values on the DOM
  printLeaderBoard();
}
