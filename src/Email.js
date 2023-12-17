import "./main.css";

const Email = () => {
  return (
    <div className="summary-output">
      <p className="summary-title">GENERATED EMAILS</p>
      <div className="summary-text"> text of the email </div>
      <div className="email-send">
        <div>Verify and send the email </div>
        <button className="send-button">Send email</button>
      </div>
    </div>
  );
};

export default Email;
