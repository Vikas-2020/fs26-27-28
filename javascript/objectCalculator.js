// Q4.) Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// const calculator = {
//   a: 0,
//   b: 0,
//   read: function () {
//     console.log(this);
//     this.a = prompt("Enter first number");
//     this.a = Number(this.a); //parseInt(a)

//     this.b = prompt("Enter second number");
//     this.b = Number(this.b); //parseInt(b)
//   },
//   sum: function () {
//     return this.a + this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// console.log(this); //Global Window object


// alert("Javascript");
// window.alert("Javascript");