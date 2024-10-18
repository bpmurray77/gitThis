const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Set your OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || 'your-secret-api-key',
});
const openai = new OpenAIApi(configuration);

app.post('/generate-plan', async (req, res) => {
  const { idea } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a step-by-step plan to implement this idea: ${idea}`,
      max_tokens: 300,
      temperature: 0.7,
    });

    res.json({ plan: completion.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

