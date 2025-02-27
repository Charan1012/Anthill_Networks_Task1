import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to DSCARS14</h1>
      
      {/* Admin Section */}
      <div className="section">
        <h2>Admin Panel</h2>
        <button onClick={() => navigate("/add-car")}>Add New Car</button>
        <button onClick={() => navigate("/update-car")}>Update Car Details</button>
        <button onClick={() => navigate("/pricing")}>Update Pricing</button>
        <button onClick={() => navigate("/listings")}>View Car Listings</button>
        <button onClick={() => navigate("/requests")}>Manage Purchase Requests</button>
      </div>

      {/* User Section */}
      <div className="section">
        <h2>User Panel</h2>
        <button onClick={() => navigate("/search-cars")}>Search Cars</button>
        <button onClick={() => navigate("/request-car")}>Request to Purchase</button>
        <button onClick={() => navigate("/request-status")}>View Request Status</button>
      </div>
    </div>
  );
};

export default Dashboard;
