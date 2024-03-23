const { OpenAI } = require('openai');
require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});
// adding body-parser and cors
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

messages = [];

app.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(response.choices[0]);

    res.json(response.choices[0].message.content.trim())
    // res.json({ botResponse: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
