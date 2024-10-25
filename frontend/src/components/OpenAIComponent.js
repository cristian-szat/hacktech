import React, { useState } from 'react';

const OpenAIComponent = () => {
    const [response, setResponse] = useState('');

    const fetchOpenAIResponse = async (retryCount = 3) => {
        try {
            const res = await fetch('http://localhost:8080/api/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: "Hello, OpenAI!",
                    model: "gpt-3.5-turbo",
                    max_tokens: 100
                })
            });
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const data = await res.json();
            setResponse(data.choices[0].text);
        } catch (error) {
            if (retryCount > 0) {
                console.log(`Retrying... attempts left: ${retryCount}`);
                setTimeout(() => fetchOpenAIResponse(retryCount - 1), 1000 * (4 - retryCount)); // 1s, 2s, 3s delay
            } else {
                console.error('Failed after retries:', error);
            }
        }
    };
    

    return (
        <div>
            <h2>OpenAI API Response</h2>
            <button onClick={fetchOpenAIResponse}>Get Response</button>
            <p>{response}</p>
        </div>
    );
};

export default OpenAIComponent;