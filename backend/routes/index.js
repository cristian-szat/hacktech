const express = require('express');
const openaiRoute = require('./openaiRoute');
const ollamaRoute = require('./ollamaRoute');

const router = express.Router();

router.use('/openai', openaiRoute);
router.use('/ollama', ollamaRoute);

module.exports = router;