//CSS
import "./main.css";

//components
import Main from "./Main";
import Agent from "./Agent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Main />
      <Agent />
    </div>
  );
};

export default Dashboard;
