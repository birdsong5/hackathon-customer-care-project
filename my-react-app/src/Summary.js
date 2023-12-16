//CSS
import "./main.css";

const Summary = ({ summary }) => {
  if (!summary) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="summary-section">
      <div className="flagProgress">
        <p className="largeTitle">Here is the summary of the call</p>
      </div>
      <div className="summary-output">
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Summary;
