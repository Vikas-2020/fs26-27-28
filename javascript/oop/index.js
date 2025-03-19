// A class is a blueprint for creating objects. It defines properties (variables) and methods (functions) that the objects will have.

// class Person {
//   constructor(n, a, sm) {
//     this.name = n;
//     this.age = a;
//     this.address = { city: "Jaipur", state: "Rajasthan" };
//     this.successManager = sm;
//     // console.log(n, a);
//   }
//   greet() {
//     console.log("I am a class method(function)");
//   }
// }

// const p1 = new Person("Anushka", 21, "palak");
// const p2 = new Person("Jyoti", 22, "shrine");
// const p3 = new Person("Vikas", 20, "harshita");

// console.log(p2.name);
// p2.name = "Jyotirmay";

// console.log(p1.successManager);
// console.log(p2.successManager);
// console.log(p3.successManager);
// console.log(p4.successManager);
// console.log(p2.name);

// console.log(p1.age);
// console.log(p2.age);
// console.log(p3.age);

// p1.greet();
// greet();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Vikas", 22);
// console.log(person1); // { name: "Vikas", age: 22 }

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
//   getter() {
//     return this._radius;
//   }
//   setter(value) {
//     if (value > 0) this._radius = value;
//     else console.log("Radius must be positive");
//   }
// }
// const c = new Circle(5);
// console.log(c.getter()); // 5

// class Animal {
//   constructor(type) {
//     this.type = type;
//   }
//   breed() {
//     console.log("All breeds are equal");
//   }
// }

// const dog = new Animal("Dog");
// console.log(dog.type);
// dog.breed();

//PRIVATE VARIABLES & METHODS

// class Bank {
//   #balance;
//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }
//   #locker() {
//     console.log("This is a private method");
//   }
//   getBalance() {
//     return this.#balance;
//   }

//   depositMoney(money) {
//     this.#balance = this.#balance + money;
//   }
// }

// const bankAccount = new Bank(11000);
// // console.log(bankAccount.#balance); //CANNOT ACCESS OUTSIDE CLASS
// // bankAccount.#locker(); //CANNOT ACCESS OUTSIDE CLASS
// bankAccount.depositMoney(90000);
// console.log(bankAccount.getBalance());

// IN JS there is no built in way to create a protected method/variable.
// It is just a convention to consider a var/method, protected if it is declared with an underscore. That is, that var/method has to be used in the base class and its subclass only.
// JS does not enforce this rule.

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
//   get radius() {
//     return this._radius;
//   }
//   set radius(value) {
//     if (value > 0) this._radius = value;
//     else console.log("Radius must be positive");
//   }
// }
// const c = new Circle(5);
// console.log(c.radius); //5
// c.radius = 10;
// console.log(c.radius); //10

// INHERITANCE: Inheritance allows a class to inherit properties and methods from another class using extends.

//BASE CLASS / PARENT CLASS
class Animal {
  constructor(name) {
    this.name = name;
    console.log("parent constructor");
  }

  sound() {
    switch (this.name) {
      case "dog":
        return "bark";

      case "cat":
        return "meow";

      case "lion":
        return "roar";

      case "frog":
        return "trrrr";

      default:
        return "BOYFRIEND";
    }
  }
}

// CHILD CLASS / SUB CLASS / DERIVED CLASS

class Tiger extends Animal {
  constructor(name) {
    super(); //call to the parent constructor
    this.name = name;
    console.log("child constructor");
  }
  welcome() {
    return "King of the jungle";
  }

}


const t1 = new Tiger("Shera");

console.log(t1.name);

// console.log(t1.age);

// console.log(t1.name);
// console.log(t1.sound());
// console.log(t1.welcome());

// const animal1 = new Animal("dog");
// const animal2 = new Animal("frog");
// // console.log(animal.name);
// console.log(animal1.sound()); //bark
// console.log(animal2.sound()); //trrrr





// callbacks, closures, HOF, DOM Manipulation
// Promises, Debouncing, Throttling

// Promise Chaining: Promise.all, Promise.allSettled, Promise.race, Promise.any

// Polyfills

// Prototype, Protypal Inheritance