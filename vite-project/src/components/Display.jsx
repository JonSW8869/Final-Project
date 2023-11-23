import React from "react";
import "./Display.css"; // Import your CSS file for additional styling

const Display = ({ background, character, dialogue, onClick }) => {
  return (
    <div className="container-fluid" onClick={onClick}>
      <div className="row">
        <div className="col-lg-12 col-md-8 col-sm-10 mx-auto">
          <div className="display-card">
            <img
              src={background}
              className="img-fluid display-background"
              alt="Background"
            />
            <div className="character-overlay">
              <img
                src={character}
                className="img-fluid character-image"
                alt="Character"
              />
            </div>
            <div className="display-text">
              <p>{dialogue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
