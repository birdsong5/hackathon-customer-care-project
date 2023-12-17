//CSS
import "./main.css";

const Details = ({ event }) => {
  if (!event) {
    return (
      <div className="summary-output">
        <p className="summary-title">BAGGAGE DETAILS</p>
        <div className="summary-text">Color of the bag: Loading...</div>
        <div className="summary-text">
          Passenger is travelling for: Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="summary-output">
      <p className="summary-title">BAGGAGE DETAILS</p>
      <div className="summary-text">Color of the bag: {}</div>
      <div className="summary-text">Passenger is travelling for: {event}</div>
    </div>
  );
};

export default Details;
