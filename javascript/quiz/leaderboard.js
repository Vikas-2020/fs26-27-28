const wrapperDiv = document.querySelector("#wrapper");

if (localStorage.getItem("players") === null) {
  const message = document.createElement("h1");
  message.classList.add("message");
  message.innerText = "NO RECORDS TO SHOW";
  wrapperDiv.append(message);
} else {
  const data = JSON.parse(localStorage.getItem("players"));
  data.sort((a, b) => {
    return b.score - a.score;
  });

  const table = document.createElement("table");

  const firstTR = document.createElement("tr");
  firstTR.innerHTML = `<th>NAME</th><th>SCORE</th><th>DATE</th>`;
  table.append(firstTR);

  data.forEach((obj) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${obj.name}</td><td>${obj.score}</td><td>${obj.date}</td>`;
    table.append(tr);
  });

  wrapperDiv.append(table);
}
