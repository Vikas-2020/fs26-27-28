// const btn = document.querySelector("button");

// btn.onclick = "printName()";

// btn.addEventListener("click", printName);
//mouseover
//mouseout
// dblclick

// function printName() {
//   console.log("Rohit");
// }

const textarea = document.querySelector("textarea");
const para = document.querySelector("p");

// keyup
// keydown
// keypress

//To get the text inside form elements, we use "value"
//To get the text inside non form elements, we use "innerText/ innerHTML/ textContent"

textarea.addEventListener("keyup", printInConsole);
let limit = 100;

function printInConsole(e) {
  //   console.log(e);
  //   console.log(e.target.value);
  // para.append(e.target.value); //this will give unexpected result
  const remaining = limit - e.target.value.length;
  if (remaining <= 0) textarea.setAttribute("maxlength", "100");
  para.innerText = remaining;
}
