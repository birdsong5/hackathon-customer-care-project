import Summary from "./Summary";
import "./main.css";

const Main = ({ data }) => {
  return (
    <div className="main-section">
      <h1>Welcome, Inna</h1>
      <div className="customer">
        <p>
          <span className="subTitle"> CALL IN PROGRESS </span>
        </p>
        <div className="customer-info">
          <p className="largeTitle">Mr. Charles de Gaulle</p>
        </div>
        <p className="subTitle">Platinum customer</p>
      </div>

      <Summary summary={data?.summary} />

      <div className="middle-section">
        <div className="group-info">
          <div className="group-header">
            <p className="title">Generate emails</p>
          </div>
          <button className="group-homework">
            <p className="title">
              Follow up email <br />
              <span className="subTitle">// just a text //</span>
            </p>
          </button>
          <div className="group-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
