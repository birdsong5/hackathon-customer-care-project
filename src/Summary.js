//CSS
import "./main.css";

const Summary = ({ summary }) => {
  if (!summary) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="summary-output">
      <p className="summary-title">SUMMARY OF THE CALL</p>
      <div className="summary-text">{summary}</div>
    </div>
  );
};

export default Summary;
