//Debouncing & Throttling

// Debouncing ensures that a function is only executed after a specified delay from the last event trigger. If the event occurs again before the delay is over, the timer resets.

// const input = document.querySelector("input");

// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func(...args), delay);
//   };
// }

// function searchQuery(e) {
//   console.log("My name is " + e.target.value);
// }

// const debouncedFunc = debounce(searchQuery, 2000);

// input.addEventListener("keyup", debouncedFunc);

// debouncedFunc("Rohit", "Jain");

// function debounce(func, delay) {
//   return function (args) {
//     setTimeout(() => func(args), delay);
//   };
// }
// function debouncedFunc(name) {
//   setTimeout(() => func(args), 1000);
// }

// debouncedFunc("Rohit");

////////////////// DEBOUNCED POKEMON SEARCH //////////////////

const input = document.querySelector("input");
const resultsDiv = document.querySelector("#results");

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

async function searchPokemon(e) {
  const query = e.target.value.trim().toLowerCase();
  resultsDiv.innerHTML = "";

  if (query.length === 0) return;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (!response.ok) throw new Error("Pokémon not found");
    const data = await response.json();

    resultsDiv.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.other.dream_world.front_default}" alt="${
      data.name
    }" />
      <p>Type: ${data.types.map((t) => t.type.name).join(", ")}</p>
      <p>Height: ${data.height}</p>
      <p>Weight: ${data.weight}</p>
    `;
  } catch (error) {
    resultsDiv.innerHTML = "<p style='color: red;'>" + error.message + "</p>";
  }
}

const debouncedSearch = debounce(searchPokemon, 500);
input.addEventListener("keyup", debouncedSearch);

////////////////// THROTTLING //////////////////

//Throttling ensures that a function is only executed at most once in a specified interval, even if triggered multiple times.

//NOTE: call, apply, bind (read on MDN)

function throttle(func, limit) {
  let lastCall = 0; //the time at which the last time throttledSearch was called(170202)
  return function (...args) {
    let currentCall = Date.now(); //the time at which this instance of throttledSearch is called (170402)
    if (currentCall - lastCall >= limit) {
      func(...args);
      lastCall = currentCall; //170202
    }
  };
}

function searchQuery(fname, lname) {
  console.log("My name is " + fname + " " + lname);
}

const throttledSearch = throttle((fn, ln) => searchQuery(fn, ln), 1000);

throttledSearch("Vikas", "Kumar"); // inside this function we are calling an API
setTimeout(() => throttledSearch("Tanmay", "Shukla"), 1001);
throttledSearch("Gaurav", "Kumar");

for (let i = 0; i < 999; i++) {
  throttledSearch(i, i + 1);
}
