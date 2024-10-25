import React from 'react';
import OpenAIComponent from './components/OpenAIComponent';
import OllamaComponent from './components/OllamaComponent';

function App() {
    return (
        <div className="App">
            <h1>My App with OpenAI and Ollama Integration</h1>
            <OpenAIComponent />
            <OllamaComponent />
        </div>
    );
}

export default App;