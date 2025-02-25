import React, { useState } from "react";
import "./RequestCar.css"; // Import the CSS file

const RequestCar = () => {
  const [carName, setCarName] = useState("");
  const [message, setMessage] = useState("");

  const handleRequest = () => {
    if (!carName) {
      alert("Please enter a car name.");
      return;
    }
    
    const requests = JSON.parse(localStorage.getItem("purchaseRequests")) || [];
    const newRequest = { carName, status: "Pending" };
    
    localStorage.setItem("purchaseRequests", JSON.stringify([...requests, newRequest]));
    setMessage("Your request has been submitted!");
  };

  return (
    <div className="request-container">
      <h2 className="request-header">Request to Purchase a Car</h2>
      <input 
        type="text" 
        placeholder="Enter car name" 
        value={carName} 
        onChange={(e) => setCarName(e.target.value)}
        className="request-input"
      />
      <button className="request-button" onClick={handleRequest}>Submit Request</button>
      {message && <p className="request-message">{message}</p>}
    </div>
  );
};

export default RequestCar;