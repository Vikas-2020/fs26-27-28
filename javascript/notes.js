const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const color = document.querySelector("input");
const notesContainer = document.querySelector(".notesContainer");
const undo = document.querySelector(".undo");
const createdNotes = [];
const deletedNotes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const noteObject = {};

  noteObject.timestamp = new Date().toLocaleString();

  const note = document.createElement("div"); //<div>
  const close = document.createElement("span");
  const dateTime = document.createElement("span");

  note.classList.add("note"); //<div class="note">
  close.classList.add("close");
  dateTime.classList.add("timestamp");

  note.innerText = textarea.value; //<div class="note">Hello World
  close.innerHTML = "&times;"; //x
  dateTime.innerText = noteObject.timestamp;

  close.addEventListener("click", (e) => {
    // e.target.parentElement.remove();
    deletedNotes.push(e.target.closest(".note"));
    e.target.closest(".note").remove();
  });

  note.style.backgroundColor = color.value; //<div class="note" style="background-color: "red">Hello World

  note.append(close, dateTime);

  noteObject.note = note;
  noteObject.position = notesContainer.children.length;

  createdNotes.push(noteObject);

  notesContainer.append(note); // UI MANIPULATION

  console.log(createdNotes);
});

undo.addEventListener("click", (e) => {
  const lastDeletedNote = deletedNotes.pop();
  notesContainer.append(lastDeletedNote);
});
