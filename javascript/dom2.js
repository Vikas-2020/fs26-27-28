// ASSIGNMENT: appendChild, insertBefore, insertAdjacentElement, insertAdjacentHTML

// const p = document.querySelector("p");
// console.log(p); //<p>
// console.log(p.innerText); //Vikas

// const p = document.querySelectorAll("p");
// console.log(p); // NodeList [p, p, p]
// console.log(p.innerText); //undefined

// for (let i = 0; i < p.length; i++) console.log(p[i].innerText);

// p.forEach((para) => console.log(para.innerText));

//Array.from

//DOM Traversal: children, previousElementSibling, nextElementSibling

// const wrapper = document.querySelector("#wrapper");

// console.log(wrapper.children);

// const section = document.querySelector("section");

// console.log(section.children);

// wrapper.forEach((elem) => console.log(elem));
// wrapper.map((elem) => console.log(elem));

// const body = document.body;

// body.querySelector("section")

// console.log(h3)

// const h3 = section.querySelector("h3");
// console.log(h3.previousElementSibling);

// const section = document.querySelector("section");
// const wrapper = document.querySelector("#wrapper");

// const copy = section.cloneNode(true);

// // console.log(copy);

// wrapper.append(copy);

// const heading = document.createElement("h1"); //<h1></h1>
// heading.innerText = "Jaadu";
// heading.style.color = "#f00";

// heading.style.cssText = ""

// heading.classList.add("channu");

// document.querySelector("#wrapper").append(heading);

// const heading = document.createElement("<h1 class='vikas'></h1>");
// document.querySelector("#wrapper").append(heading);
