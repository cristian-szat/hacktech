import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardContainer.module.css";

function CardContainer() {
  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        onClick={() => navigate("/patient")} // Redirects to Patient Page
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/patient.jpg`}
          alt="Diagnostic for Patient"
          className={styles.cardImage}
        />
        <p className={styles.cardText}>Patient</p>
      </div>
      <div
        className={styles.card}
        onClick={() => navigate("/doctor")} // Redirects to Doctor Page
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/doctor-ai.jpg`}
          alt="Diagnostic for Doctor"
          className={styles.cardImage}
        />
        <p className={styles.cardText}>Doctor</p>
      </div>
    </div>
  );
}

export default CardContainer;

