//getItem(), setItem(), removeItem(), clear()

// sessionStorage.setItem("name", "Channu");
// localStorage.setItem("name", "Channu");

// localStorage.setItem("name", "Vikas");

// localStorage.setItem("studentCount", 50);

// document.querySelector("#details").append(localStorage.getItem("studentCount"));

// let count = localStorage.getItem("studentCount");
// console.log(typeof count);

// const arr = ["Jyoti", "Vikas", "Abhishek"];
// // localStorage.setItem("names", arr);

// const newArr = localStorage.getItem("names");

// newArr.push("Ajay");
// console.log(newArr);

//TO PRESERVE THE TYPE WHILE STORING DATA IN LS OR SS,
// WE USE JSON.STRINGIFY WHILE STORING, and
// JSON.PARSE WHILE RETRIEVING

// const arr = ["Jyoti", "Vikas", "Abhishek"];
// localStorage.setItem("names2", JSON.stringify(arr));

// const newArr2 = JSON.parse(localStorage.getItem("names2"));
// newArr2.push("Jatin");
// console.log(newArr2);

// const person = {
//   name: "Jatin",
//   girlfriend: null,
// };

// localStorage.setItem("obj", JSON.stringify(person));
// const obj2 = JSON.parse(localStorage.getItem("obj"));
// for (let x in obj2) {
//   console.log(x);
// }

// localStorage.removeItem("name");
// localStorage.removeItem("studentCount");

// localStorage.clear();
