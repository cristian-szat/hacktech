import React, { useState } from 'react';
import axios from 'axios';

function OllamaComponent() {
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOllamaQuery = async () => {
        setLoading(true);
        setResponse('');
        
        try {
            const res = await axios.post('http://localhost:8080/api/ollama', {
                query: 'Your sample question here'
            });
            setResponse(res.data.reply);
        } catch (error) {
            console.error("Error calling Ollama API:", error);
            setResponse("Failed to get a response from Ollama API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Ollama Integration</h2>
            <button onClick={handleOllamaQuery} disabled={loading}>
                {loading ? 'Loading...' : 'Call Ollama API'}
            </button>
            {response && <p>Response: {response}</p>}
        </div>
    );
}

export default OllamaComponent;