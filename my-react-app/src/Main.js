import Summary from "./Summary";
import "./main.css";

const Main = () => {
  return (
    <div className="main-section">
      <h1>Welcome, Inna</h1>
      <div class="customer">
        <p>
          <span class="subTitle"> CALL IN PROGRESS </span>
        </p>
        <div class="customer-info">
          <p class="largeTitle">Mr. Charles de Gaulle</p>
        </div>
        <p class="subTitle">Platinum customer</p>
      </div>

      <Summary />

      <div class="middle-section">
        <div class="group-info">
          <div class="group-header">
            <p class="title">Generate emails</p>
          </div>
          <button class="group-homework">
            <p class="title">
              Follow up email <br />
              <span class="subTitle">// just a text //</span>
            </p>
          </button>
          <div class="group-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
