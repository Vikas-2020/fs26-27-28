// A closure is a function that remembers the variables from its outer scope even after the outer function has finished execution.

//A closure is a function that "remembers" the lexical scope in which it was created, even when it is executed outside that scope.

// function outer() {
//   return function namedFunc() {
//     return function ekAurNamedFunc() {
//       return "Gaurav";
//     };
//   };
// }

// const closure = outer(); //we are assigning the return value of outer function to the var closure
// console.log(closure()); //without parenthesis, the function definition. With parenthesis, it will return the string "Hello World"

// const closure = outer();
// const closure2 = closure();
// console.log(closure2());

// console.log(outer()()()); //CURRYING

// // USE CASE: Data Encapsulation

// function counter() {
//   let count = 0; // Private variable, defined in the lexical scope

//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     },
//     getValue: function () {
//       console.log(count);
//     },
//   };
// }

// // const myCounter = counter();
// // myCounter.increment(); // 1
// // myCounter.increment(); // 2
// // myCounter.decrement(); // 1
// // myCounter.getValue();

// // // count variable is not directly accessible
// // console.log(myCounter.count); // undefined

// // function createMultiplier(multiplier) {
// //   return function (value) {
// //     return value * multiplier;
// //   };
// // }

// // const double = createMultiplier(2);
// // const triple = createMultiplier(3);

// // console.log(double(3)); //6
// // console.log(triple(6)); //18

// // function createCounter() {
// //   let count = 0;
// //   return function () {
// //     count++;
// //     console.log(count);
// //   };
// // }

// // const counter = createCounter();
// // counter();
// // counter();
// // counter();

// // function createUser(name) {
// //     let score = 0;

// //     return {
// //       getName: function () {
// //         return name;
// //       },
// //       increaseScore: function () {
// //         score++;
// //       },
// //       getScore: function () {
// //         return score;
// //       }
// //     };
// //   }

// //   const user = createUser("Alice");
// //   console.log(user.getName());
// //   user.increaseScore();
// //   user.increaseScore();
// //   console.log(user.getScore());

// // function delayedLogger() {
// //   for (var i = 1; i <= 3; i++) {
// //     setTimeout(function () {
// //       console.log(i);
// //     }, 1000);
// //   }
// // }

// // delayedLogger();

// function once(func) {
//   let executed = false;
//   return function (...args) {
//     console.log("args", args);
//     if (!executed) {
//       executed = true;
//       return func(...args);
//     }
//   };
// }

// const sayHello = once((fname, lname) =>
//   console.log(`Hello, ${fname} ${lname}!`)
// );

// sayHello("John", "Cena");
// sayHello("Doe");

// // DEBOUNCING & THROTTLING

// // PROTOTYPE, PROTOTYPAL INHERITANCE, POLYFILLS

// function createListener(eventName) {
//   return function (callback) {
//     console.log(`Listening for ${eventName}`);
//     callback();
//   };
// }

// const clickListener = createListener("click");
// clickListener(() => console.log("Click event triggered!"));

// function createCounter(step) {
//   let count = 0;
//   return function () {
//     count += step;
//     console.log(count);
//   };
// }

// const counter = createCounter(5);
// counter();
// counter();
// counter();

// function uniqueIDGenerator() {
//   let id = 0;
//   return function () {
//     id++;
//     return `id-${id}`;
//   };
// }

// const getID = uniqueIDGenerator();
// console.log(getID());
// console.log(getID());
// console.log(getID());

// function delayedMessage(msg, delay) {
//   return function () {
//     setTimeout(() => console.log(msg), delay);
//   };
// }

// const sayHello = delayedMessage("Hello, World!", 2000);
// console.log("Waiting...");
// sayHello();

// var print;

// for (let i = 0; i < 3; i++) {
//   print = function () {
//     console.log(i); //0 1 2
//   };
// }

// var myObject = { print: print };
// myObject.print(); //3 2

// for (var i = 0; i < 3; i++) {
//   console.log("Channu");
//   setTimeout(function() {
//       console.log(i);
//   }, 1000);
// }

//IIFE

for (var i = 0; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

// for (let i = 0; i <= 3; i++) {
//   function channu(j) {
//     console.log(j);
//   }
//   channu(i);
// }

// console.log("Start");

// setTimeout(function() {
//     console.log("Timeout");
// }, 0);

// console.log("End");

// let count = 0;
// let interval = setInterval(function () {
//   console.log("Hello");
//   count++;
//   if (count === 3) clearInterval(interval);
// }, 500);
