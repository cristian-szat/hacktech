import React from "react";
import styles from "./PatientPage.module.css";
import Chatbot from "./../components/Chatbot"; // Import the Chatbot component

function PatientPage() {
  // Sample conversation history
  const conversationHistory = [
    { id: 1, title: "Flu Symptoms" },
    { id: 2, title: "Medication Advice" },
    { id: 3, title: "Exercise Tips" }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Conversation history sidebar */}
      <div className={styles.historySidebar}>
        <h3>History</h3>
        <ul>
          {conversationHistory.map((conv) => (
            <li key={conv.id} className={styles.historyItem}>
              {conv.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <Chatbot />
    </div>
  );
}

export default PatientPage;
