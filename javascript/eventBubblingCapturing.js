const wrapper = document.querySelector("#wrapper");
const parent = document.querySelector("#parent");
const btn = document.querySelector("button");

//event delegation

wrapper.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("You clicked the WRAPPER");
  },
  true
);

parent.addEventListener(
  "click",
  (e) => {
    //   e.stopPropagation();
    console.log("You clicked the PARENT");
  },
  true
);

btn.addEventListener(
  "click",
  (e) => {
    //   e.stopPropagation();
    console.log("You clicked the BUTTON");
  },
  true
);

//execution of event listeners from child to parent is known as EVENT BUBBLING. This is the default behaviour.
