const form = document.querySelector("form");
const input = document.querySelector("input");
const select = document.createElement("select");
const chatMessages = document.querySelector("#chat-messages");
// const ANT_API_KEY =
//   "";

createAIAgents();

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const message = input.value.trim();
  const selectedAgent = select.value;

  //SHOW THE MESSAGE IN THE BIG DIV
  if (message.length > 0) {
    showMessage(message, "user");
    input.value = ""; //reset the input
    showMessage("Thinking...", "ai");

    const aiResponse = await callAIAgent(message, selectedAgent);
    chatMessages.children[chatMessages.children.length - 1].remove();

    showMessage(aiResponse, "ai");
  }
}

async function callAIAgent(userMessage, agent) {
  try {
    const response = await fetch("http://localhost:4000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": ANT_API_KEY,
        "Anthropic-Version": "2023-06-01",
      },
      body: JSON.stringify({ message: userMessage, agent: agent }),
    });
    const data = await response.json();
    // console.log(data);

    return data.response;
  } catch (error) {
    console.log(error);
  }
}

function showMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender + "-message");
  messageElement.innerText = message;
  chatMessages.append(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createAIAgents() {
  const opt1 = document.createElement("option");
  const opt2 = document.createElement("option");

  opt1.innerText = "ChatGPT";
  opt1.value = "chatgpt";

  opt2.innerText = "Claude";
  opt2.value = "claude";

  select.append(opt1, opt2);

  //   form.insertBefore(select, form.children[0]);
  form.prepend(select);
}
