const express = require('express');
const openaiRoute = require('./openaiRoute');
const ollamaRoute = require('./ollamaRoute');
const patientRoute = require('./patientRoute');

const router = express.Router();

router.use('/openai', openaiRoute);
router.use('/ollama', ollamaRoute);
router.use('/patient', patientRoute);

module.exports = router;