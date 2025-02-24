const band = document.querySelector("#band");

const assets = ["crash", "kick", "snare", "tom"];

assets.forEach((asset) => {
  const box = document.createElement("div"); //<div>
  box.classList.add("box"); //<div class="box"
  const name = document.createElement("h2"); //h2

  box.style.backgroundImage = "url(assets/" + asset + ".png)";
  //<div class="box" style="background-image: url(assets/crash.png)"
  //<div class="box" style="background-image: url(assets/kick.png)"

  name.innerText = asset.toUpperCase();

  const sound = document.createElement("audio");
  sound.src = "assets/" + asset + ".mp3";
  //   sound.setAttribute("src", "assets/" + asset + ".mp3");

  box.addEventListener("click", () => {
    sound.play();
  });

  box.append(name);
  band.append(box);
});
