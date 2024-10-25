const express = require('express');
const router = express.Router();
const { fetchOllamaResponse } = require('../controllers/ollamaController');

router.post('/', fetchOllamaResponse);

module.exports = router;