const { default: ollama } = require('ollama');

const fetchOllamaResponse = async (req, res) => {
    const { query } = req.body;

    try {
        const response = await ollama.chat({
            model: 'Side',
            messages: [{ role: 'user', content: query }],
        });

        res.json({ reply: response.message.content });
    } catch (error) {
        console.error('Error calling Ollama API:', error);
        res.status(500).send({ error: 'Error interacting with the model' });
    }
};

module.exports = { fetchOllamaResponse };