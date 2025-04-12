const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// AI Companion Endpoint
app.post('/api/ai-companion', async (req, res) => {
  const userInput = req.body.text;

  try {
    const openaiResponse = await axios.post('https://api.openai.com/v1/completions', {
      model: "text-davinci-003",
      prompt: `You are an empathetic mental health companion. Respond kindly to: "${userInput}"`,
      max_tokens: 150
    }, {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });

    res.json({ reply: openaiResponse.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI companion service failed." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
