import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

app.use(cors());
app.use(express.json());

app.post("/api/generate-lyrics", async (req, res) => {
  const { mood } = req.body;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`, 
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are a poetic assistant that generates song lyrics based on mood." },
          { role: "user", content: `Generate song lyrics for a ${mood} mood.` },
        ],
      temperature: 0.7,
      max_tokens: 200,
})

    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error?.message || "Unknown API error" });
    }

    res.json({ lyrics: data.choices[0].message.content });
  } catch (err) {
    console.error("Backend Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`Server running on http://localhost:${PORT}`

));
