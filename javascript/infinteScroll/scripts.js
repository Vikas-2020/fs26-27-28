const apikey = "";
const count = 15; //number of photos to fetch in one call
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
let images = [];
let loaded = false;

const loader = document.querySelector("#loader");
const imgContainer = document.querySelector("#img-container");

async function getPhotos() {
  loaded = false;
  loader.style.display = "block";
  try {
    const response = await fetch(apiUrl);
    // images.push(...await response.json());
    images = await response.json();
    console.log(images);
    displayPhotos(images);
  } catch (error) {
    console.log(error.message);
  }
}

function displayPhotos(arr) {
  const fragment = document.createDocumentFragment();
  arr.forEach((obj) => {
    const anchor = document.createElement("a");
    const image = document.createElement("img");

    anchor.href = obj.links.html;
    image.src = obj.urls.regular;
    image.alt = obj.urls.regular;
    image.title = obj.alt_description;

    anchor.append(image);
    fragment.append(anchor);
  });
  imgContainer.append(fragment);
  loader.style.display = "none";
  loaded = true;
}

// console.log("window.innerHeight", window.innerHeight); //the viewable height + horizontal scrollbar's height
// console.log("document.body.offsetHeight", document.body.offsetHeight);
// console.log("window.scrollY", window.scrollY);

window.addEventListener("scroll", () => {
  window.scrollY + window.innerHeight >= document.body.offsetHeight && loaded
    ? getPhotos()
    : "";
});

getPhotos(); //initial 15 photos
