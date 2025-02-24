const icons = document.querySelectorAll(".accord i");
const allPara = document.querySelectorAll(".accord p");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const para = icon.parentElement.nextElementSibling;

    if (para.classList.contains("active")) {
      //hide the para
      para.classList.remove("active");

      //change sign - to +
      icon.classList.remove("fa-square-minus");
      icon.classList.add("fa-square-plus");
    } else {
      allPara.forEach((para) => {
        if (para.classList.contains("active")) {
          para.classList.remove("active");
          return;
        }
      });

      //show the para
      para.classList.add("active");

      //change sign + to -
      icon.classList.remove("fa-square-plus");
      icon.classList.add("fa-square-minus");
    }
  });
});
