// src/TalkingCharacter.js

import React, { useState } from "react";
import "./TalkingCharacter.css"; // Import the CSS for this component

const TalkingCharacter = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [text, setText] = useState("");

  const handleTalk = () => {
    const fetchedText = "Hello! I'm talking!";
    setText(fetchedText);
    setIsTalking(true);

    // Stop the talking after 1 second
    setTimeout(() => {
      setIsTalking(false);
      setText("");
    }, 1000);
  };

  return (
    <div className="talking-character">
      <div className="character">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ai-face.jpg`} // Replace this with your head image URL
          alt="Talking Character"
          className="character-image"
        />
        <div className="mouth-container">
          {isTalking && (
            <>
              <div className="mouth talking" />
              <div className="mouth talking" />
              <div className="mouth talking" />
            </>
          )}
        </div>
        {isTalking && <div className="speech-bubble">{text}</div>}
      </div>
      <button className="talk-button" onClick={handleTalk}>Talk</button>
    </div>
  );
};

export default TalkingCharacter;
