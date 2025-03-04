import { emojiList } from "./emojiList.js";

const resultsDiv = document.querySelector("#results");
const form = document.querySelector("form");
const input = form.querySelector("input");

window.addEventListener("load", () => displayEmojis(emojiList));
//DOMContentLoaded

form.addEventListener("submit", searchEmojis);
input.addEventListener("keyup", searchEmojis);

function searchEmojis(e) {
  e.preventDefault();
  const inputValue = input.value.toLowerCase();

  const filteredArr = emojiList.filter((obj) => {
    return (
      obj.description.includes(inputValue) ||
      obj.tags.toString().includes(inputValue) ||
      obj.aliases.toString().includes(inputValue)
    );

    // if (obj.description.includes(inputValue)) return true;
    // else if (obj.tags.toString().includes(inputValue)) return true;
    // else if (obj.aliases.toString().includes(inputValue)) return true;

    // else if (obj.tags.some((elem) => { elem.startsWith(input.value) }))  return true;
    // else if (obj.aliases.some((elem) => { elem.startsWith(input.value) }))  return true;
  });

  console.log(filteredArr);
  displayEmojis(filteredArr);
}

function displayEmojis(arr) {
  resultsDiv.innerHTML = "";

  const fragment = document.createDocumentFragment();
  arr.forEach((obj) => {
    const parent = document.createElement("div");
    const icon = document.createElement("p");
    const alias = document.createElement("p");
    const desc = document.createElement("p");

    parent.classList.add("parent");
    icon.classList.add("icon");
    alias.classList.add("alias");
    desc.classList.add("desc");

    icon.innerText = obj.emoji;
    alias.innerText = obj.aliases.toString();
    desc.innerText = obj.description;

    parent.append(icon, alias, desc);
    fragment.append(parent);
  });
  resultsDiv.append(fragment);
}
// some()
