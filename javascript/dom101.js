// document.write("Hello World")

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()

//WILL RETURN REFERENCE TO A SINGLE ELEMENT
// const h1 = document.getElementById("heading");
// console.log(h1);

//WILL RETURN A COLLECTION OF ELEMENTS (HTMLCollection), ALL HAVING THE SPECIFIED CLASS
// const h1 = document.getElementsByClassName("heading");
// console.log(h1);

// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// h1.forEach((heading) => {
//   console.log(heading.innerText);
// });

// const p = document.getElementById("p1");
// console.log(p.innerText); //innerHTML //textContent

//NO PROPERTY / METHOD CAN BE APPLIED DIRECTLY ON A COLLECTION

// const para = document.getElementsByTagName("p");
// console.log(para.innerText);

// for (let i = 0; i < para.length; i++) {
//   console.log(para[i].innerText);
// }

//Array.from() : The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// document.querySelector()
// document.querySelectorAll()

// document.querySelector("#id")
// document.querySelector(".class")
// document.querySelector("h1")
// document.querySelector("input[name=password]")

// document.querySelector("section p").style.color = "red";
// document.querySelector("section p").style.fontSize = "40px";
// document.querySelector("section p").style.border = "solid";

// document.querySelector("section p").style.cssText =
//   "color: #f00; font-size: 40px; border: solid; border-radius: 10px";

// const heading = document.querySelector("h1");

// heading.style.cssText = "color: #3b5998; font-size: 4rem;border: solid";

// heading.classList.add("decorated", "secondClass", "thirdClass");
// heading.classList.add("flex", "justify-center", "items-center");

//ClassList also contains: remove, toggle, contains

// const heading = document.querySelector("h1").classList.add("flex");




//querySelectorAll

//classList, children, cloneNode

//events


