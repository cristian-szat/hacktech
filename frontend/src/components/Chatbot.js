import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // Create a new CSS module for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you with your health today?" },
    { sender: "user", text: "Can you tell me about flu symptoms?" }
  ]);
  const [input, setInput] = useState("");

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
      const response = await mockChatbotAPI(input);
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: response.response }]);
    }
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
            {message.text}
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
