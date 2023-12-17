import Email from "./Email";
import Summary from "./Summary";
import "./main.css";

const Main = ({ data }) => {
  return (
    <div className="main-section">
      <h1>
        Welcome to CALLiope, where every call is a melody of support – we're
        thrilled to have you!
      </h1>
      <div className="customer">
        <p>
          <span className="subTitle">CALL HAS BEEN RECORDED</span>
        </p>
        <div className="customer-info">
          <div className="picture-customer">
            <img src="images/profile-img.png" alt="Agent" />
            <p className="largeTitle">Mr. {data?.customer_name}</p>
          </div>
        </div>
        <p className="subTitle">Platinum customer</p>
      </div>

      <Summary summary={data?.summary} />

      <div className="summary-output">
        <p className="summary-title">BAGGAGE DETAILS</p>
        <div className="details-text">
          Color of the bag:{" "}
          <span className="details-text-data">{data?.color}</span>
        </div>
        <div className="details-text">
          Passenger is travelling for:{" "}
          <span className="details-text-data">{data?.event}</span>
        </div>
        <div className="details-text">
          Baggage special details:{" "}
          <span className="details-text-data">{data?.special}</span>
        </div>
        <div className="details-text">
          Passenger needs first necessities:{" "}
          <span className="details-text-data">{data?.necessities}</span>
        </div>
      </div>
      <Email />
    </div>
  );
};

export default Main;
