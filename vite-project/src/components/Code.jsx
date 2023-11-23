import React from "react";
import "./Code.css"; // Make sure to create or adjust your CSS file accordingly

const Code = ({ code }) => {
  return (
    <div className="code-container">
      <div className="code-header">Character Terminal</div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
