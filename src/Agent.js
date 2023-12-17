import "./main.css";

import { useState, useEffect } from "react";

const Agent = ({ data }) => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    setVerified(data?.verified);
  }, [data?.verified]);

  return (
    <div className="agent-section">
      <div className="picture">
        <img src="images/calliope.jpg" alt="Agent" />
        <div className="largeTitle">Tereza</div>
        <div className="summary-title">CUSTOMER CARE AGENT</div>
      </div>

      <div className="feedback-section">
        <div className="summary-title">
          CALL FEEDBACK <br />
        </div>
        <div className="feedback-text">{data?.feedback}</div>
      </div>

      <div className="progress-profile">
        <p className="summary-title">INFORMATION FOR SUPERVISOR</p>
        <div className="progressBox grammar-profile-section">
          <p className="title">Quality:</p>
          <div className="largeTitle">{data?.quality}</div>
        </div>
        <div className="progressBox dictionary-profile-section">
          <p className="title">Customer was verified</p>
          {verified ? (
            // If true
            <i className="fa-solid fa-spell-check green">✓</i>
          ) : (
            // If false
            <i className="fa-solid fa-spell-check red">X</i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agent;
