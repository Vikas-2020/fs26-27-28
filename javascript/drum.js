const band = document.querySelector("#band");

const assets = ["crash", "kick", "snare", "tom"];

const firstLetters = assets.map((asset) => {
  return asset.slice(0, 1);
});

// const parent = document.createElement("div");
const fragment = document.createDocumentFragment();

assets.forEach((asset) => {
  const box = document.createElement("div");
  box.classList.add("box");
  const name = document.createElement("h2");

  box.style.backgroundImage = "url(assets/" + asset + ".png)";
  name.innerText = asset.toUpperCase();

  const sound = document.createElement("audio");
  sound.src = "assets/" + asset + ".mp3";

  box.addEventListener("click", () => {
    sound.play();
  });

  // window.addEventListener("keypress", (e) => {
  //   if (e.key === asset.slice(0, 1)) sound.play();
  // });

  box.append(name);
  fragment.append(box);
});

band.append(fragment);

window.addEventListener("keypress", (e) => {
  console.log(e.key);
  assets.find((asset) => {});
});
