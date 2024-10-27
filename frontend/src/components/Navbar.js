import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
      <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-ai.png`}
          alt="Pulse Path"
          className={styles.cardImage}
          />
      </a>
      <h1 className={styles.logo}>Pulse Path - AI Diagnostics</h1>
    </nav>
  );
}

export default Navbar;
