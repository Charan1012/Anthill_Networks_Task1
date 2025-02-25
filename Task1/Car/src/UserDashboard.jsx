import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css"; // Import the CSS file

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">User Dashboard</h1>
      <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={() => navigate("/")}>Search Cars</button>
        <button className="dashboard-button" onClick={() => navigate("/request-car")}>Request to Purchase</button>
        <button className="dashboard-button" onClick={() => navigate("/request-status")}>View Request Status</button>
      </div>
    </div>
  );
};

export default UserDashboard;