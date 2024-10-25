const express = require('express');
const router = express.Router();
const { fetchOpenAIResponse } = require('../controllers/openaiController');

router.post('/', fetchOpenAIResponse);

module.exports = router;