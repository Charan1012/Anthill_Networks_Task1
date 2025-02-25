import React, { useState, useEffect } from "react";
import "./RequestStatus.css"; // Import the CSS file

const RequestStatus = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("purchaseRequests")) || [];
    setRequests(storedRequests);
  }, []);

  return (
    <div className="status-container">
      <h2 className="status-header">Your Purchase Requests</h2>
      {requests.length === 0 ? (
        <p className="status-message">No requests found.</p>
      ) : (
        <ul className="status-list">
          {requests.map((req, index) => (
            <li key={index} className="status-item">
              {req.carName} - <strong>{req.status}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestStatus;