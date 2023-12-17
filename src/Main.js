import Details from "./Details";
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
            <p className="largeTitle">Mr. Charles de Gaulle</p>
          </div>
        </div>
        <p className="subTitle">Platinum customer</p>
      </div>

      <Summary summary={data?.summary} />
      <Details details={data?.event} />

      <div className="middle-section">
        <div className="group-info">
          <div className="group-header">
            <p className="title">Generated emails</p>
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
