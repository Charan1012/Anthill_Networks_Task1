import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // State for adding a car
  const [car, setCar] = useState({
    name: "",
    km: "",
    fuel: "",
    location: "",
    price: "",
    emi: "",
    image: "",
  });

  const handleCarChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleAddCar = (e) => {
    e.preventDefault();
    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    localStorage.setItem("cars", JSON.stringify([...cars, car]));
    alert("Car added successfully!");
    setCar({ name: "", km: "", fuel: "", location: "", price: "", emi: "", image: "" });
  };

  // State for updating car details
  const [carId, setCarId] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleUpdateCar = () => {
    alert(`Updated car ${carId} with new price: ${newPrice}`);
  };

  // State for car listings
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
    setCars(savedCars);
  }, []);

  // State for purchase requests
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem("orders")) || [];
    setRequests(savedRequests);
  }, []);

  const handleApproveRequest = (index) => {
    alert(`Approved request for ${requests[index].name}`);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add Car Section */}
      <div className="admin-section">
        <h2>Add New Car</h2>
        <form onSubmit={handleAddCar}>
          <input type="text" name="name" placeholder="Car Name" value={car.name} onChange={handleCarChange} required />
          <input type="text" name="km" placeholder="Kilometers Driven" value={car.km} onChange={handleCarChange} required />
          <input type="text" name="fuel" placeholder="Fuel Type" value={car.fuel} onChange={handleCarChange} required />
          <input type="text" name="location" placeholder="Location" value={car.location} onChange={handleCarChange} required />
          <input type="text" name="price" placeholder="Price" value={car.price} onChange={handleCarChange} required />
          <input type="text" name="emi" placeholder="EMI" value={car.emi} onChange={handleCarChange} required />
          <input type="text" name="image" placeholder="Image URL" value={car.image} onChange={handleCarChange} required />
          <button type="submit">Add Car</button>
        </form>
      </div>

      {/* Update Car Section */}
      <div className="admin-section">
        <h2>Update Car Details</h2>
        <input type="text" placeholder="Car ID" onChange={(e) => setCarId(e.target.value)} required />
        <input type="text" placeholder="New Price" onChange={(e) => setNewPrice(e.target.value)} required />
        <button onClick={handleUpdateCar}>Update Car</button>
      </div>

      {/* Car Listings Section */}
      <div className="admin-section">
        <h2>Car Listings</h2>
        {cars.length === 0 ? <p>No cars available.</p> : (
          cars.map((car, index) => (
            <div key={index} className="car-listing">
              <h3>{car.name}</h3>
              <p>{car.km} | {car.fuel} | {car.location}</p>
              <h2>{car.price}</h2>
              <p>EMI: {car.emi}</p>
            </div>
          ))
        )}
      </div>

      {/* Manage Requests Section */}
      <div className="admin-section">
        <h2>Manage Purchase Requests</h2>
        {requests.length === 0 ? <p>No requests available.</p> : (
          requests.map((request, index) => (
            <div key={index} className="request-listing">
              <h3>{request.name}</h3>
              <p>{request.km} | {request.fuel} | {request.location}</p>
              <h2>{request.price}</h2>
              <button onClick={() => handleApproveRequest(index)}>Approve</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
