function debounce(func, delay) {
  let timer;
  return function (args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(args), delay);
  };
}

const output = debounce((name) => {
  console.log("Hello " + name);
}, 1000);
output("Rohit");
