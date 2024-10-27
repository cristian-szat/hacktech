const { default: ollama } = require('ollama');

const fetchOllamaResponse = async (req, res) => {
    const { query, context } = req.body;

    try {
        const response = await ollama.generate({
            model: process.env.OLLAMA_MODEL_NAME,
            prompt: query,
            context
        });

        res.json({ reply: response });
    } catch (error) {
        console.error('Error calling Ollama API:', error);
        res.status(500).send({ error: 'Error interacting with the model' });
    }
};

module.exports = { fetchOllamaResponse };