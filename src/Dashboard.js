//CSS
import "./main.css";

import React, { useState, useEffect } from "react";

//components
import Main from "./Main";
import Agent from "./Agent";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/birdsong5/hackathon-customer-care-project/main/my-react-app/output.json"
        );

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Main data={data} />
      <Agent data={data} />
    </div>
  );
};

export default Dashboard;
