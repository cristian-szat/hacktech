// server.js
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/cors');
const openaiRoute = require('./routes/openaiRoute');
const ollamaRoute = require('./routes/ollamaRoute');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/openai', openaiRoute);
app.use('/api/ollama', ollamaRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
