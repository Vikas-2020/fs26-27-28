const form = document.querySelector("form");
const input = document.querySelector("input");
const API_KEY = "";
const BASE_PATH = "https://image.tmdb.org/t/p/original";
const results = document.querySelector("#results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        input.value +
        "&include_adult=false&language=en-US&page=1&api_key=" +
        API_KEY
    );
    const result = await response.json();
    console.log(result.results);
    displayData(result.results);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  results.innerHTML = "";
  const fragment = document.createDocumentFragment();
  data.forEach((obj) => {
    const image = document.createElement("img");
    image.src = BASE_PATH + obj.poster_path;
    fragment.append(image);
  });
  results.append(fragment);
}

// Promise.all, Promise.allSettled
