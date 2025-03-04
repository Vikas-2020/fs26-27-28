// console.log("Fetching Scores...");

// //a dummy function which will time to complete
// fetchScores(); //fetch score from cricbuzz

// //Print this message after the function
// setTimeout(() => console.log("Fetching DONE"), 2000);

// object which tells us what is the current state of a function or an operation which is not complete yet (an async function).
// The state can be either PENDING, RESOLVED(FULFILLED) or REJECTED.
// When the promise is RESOLVED, it returns the value returned from the function
// When the promise is REJECTED, it returns the error for the rejection

// console.log("Start");

// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");

//       setTimeout(() => {
//         console.log("Step 4 - Done!");
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }, 4000);

// const response = fetch("https://randomuser.me/api");

// console.log(response);

// TRY & CATCH SYNTAX

const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   fetch("https://randomuser.me/api")
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log(result.results[0]);
//       displayData(result.results[0]);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// ASYNC AWAIT SYNTAX

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const result = await response.json();
    console.log(result.results[0]);
    displayData(result.results[0]);
  } catch (error) {
    console.log(error);
  }
});

function displayData(object) {
  const image = document.createElement("img");
  image.src = object.picture.large;
  const name = document.createElement("h1");
  name.textContent = object.name.first + " " + object.name.last;
  document.body.appendChild(image);
  document.body.appendChild(name);
}
