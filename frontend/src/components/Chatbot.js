import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // Create a new CSS module for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you with your health today?" },
    { sender: "user", text: "Can you tell me about flu symptoms?" }
  ]);
  const [input, setInput] = useState("");

  const [chatContext, setchatContext] = useState([]);

  // Mock API call to simulate chatbot response
  const mockChatbotAPI = async (prompt) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ response: `This is a mock response to: "${prompt}"` });
      }, 1000); // Simulate network delay
    });
  };

  // Handle message submission
  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { sender: "user", text: input }]);
      setInput("");
      
      const response =  await postToOllama(input.trim(), chatContext); //await mockChatbotAPI(input);

      console.log("context", response);

      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: response.response }]);
    }
  };

  async function postToOllama(query, context) {
    try {
      const response = await fetch("http://localhost:8080/api/ollama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, context}), // Passing the query as a JSON object
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const result = await response.json();
  
      // Extracting the reply from the response JSON
      const replyMessage = result.reply.response || "No reply received";
      console.log("Reply from server:", replyMessage);

      setMessages((prevMessages) => [...prevMessages, { sender: "user", text: replyMessage }]);

      setchatContext(result.reply.context);
  
      return replyMessage;
    } catch (error) {
      console.error("Error posting to Ollama:", error);
    }
  }

    // Function to replace newline characters with <br> tags
    const processText = (text) => {

      if(text) {
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }
      return text;
    };

  return (
    <div className={styles.chatContainer}>
      <h2>Medical Assistant</h2>
      <div className={styles.chatBox}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "user" ? styles.userMessage : styles.botMessage}
          >
            {processText(message.text)}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className={styles.inputField}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
