//json
import React, { useState, useEffect } from "react";

//CSS
import "./main.css";

const Summary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://drive.google.com/file/d/1-BzPPipXJsozkijaMgF6avcrwLu8c0a4/view?usp=drive_link"
        );

        if (response.ok) {
          const data = await response.json();
          setSummary(data.summary);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!summary) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="summary-section">
      <div class="flagProgress">
        <p class="largeTitle">Here is the summary of the call</p>
      </div>
      <div className="summary-output">
        <pre>{JSON.stringify(summary, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Summary;
