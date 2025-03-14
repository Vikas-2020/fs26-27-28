//Debouncing & Throttling

// Debouncing ensures that a function is only executed after a specified delay from the last event trigger. If the event occurs again before the delay is over, the timer resets.

//Throttling ensures that a function is only executed at most once in a specified interval, even if triggered multiple times.

const input = document.querySelector("input");

function debounce(func, delay) {
  let timer;
  return function (...args) {
    // console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function searchQuery(e) {
  console.log("My name is " + e.target.value);
}

const debouncedFunc = debounce(searchQuery, 2000);

input.addEventListener("keyup", debouncedFunc);

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
