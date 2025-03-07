import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const PORT = 4000;
// const ANT_API_KEY =
//   "";

// const openai = new OpenAI({
//   apiKey:
//     "", // Replace with your OpenAI API Key
// });

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5501",
    methods: ["GET, POST"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/chat", async (req, res) => {
  const { message, agent } = req.body;

  try {
    if (agent === "claude") {
      // Request to Anthropic API
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": ANT_API_KEY,
          "Anthropic-Version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 1000,
          messages: [{ role: "user", content: message }],
        }),
      });

      const data = await response.json();
      console.log(data);

      return res.json({ response: data.content[0].text });
    } else if (agent === "chatgpt") {
      // Request to OpenAI API (ChatGPT)
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Change to "gpt-4" if needed
        messages: [{ role: "user", content: message }],
      });

      return res.json({ response: completion.choices[0].message.content });
    } else {
      return res.status(400).json({ error: "Invalid AI agent selected" });
    }
  } catch (error) {
    console.error("Error calling AI API:", error);
    res.status(500).json({ error: "Failed to process request" });
  }
});

app.listen(PORT, () => console.log("Server started at port " + PORT));
