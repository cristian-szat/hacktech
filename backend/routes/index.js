const express = require('express');
const openaiRoute = require('./routes/openaiRoute');
const ollamaRoute = require('./routes/ollamaRoute');

const router = express.Router();

router.use('/api/openai', openaiRoute);
router.use('/api/ollama', ollamaRoute);

module.exports = router;