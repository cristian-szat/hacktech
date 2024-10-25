const axios = require('axios');

const fetchOpenAIResponse = async (req, res) => {
    const { prompt, model = 'gpt-3.5-turbo', max_tokens = 100 } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model,
            prompt,
            max_tokens,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'Error fetching response from OpenAI API' });
    }
};

module.exports = { fetchOpenAIResponse };