import React from "react";
import "./CarListing.css";

const CarListing = ({ car, onOrderRequest }) => {
    return (
      <div className="car-card">
        <div className="featured-badge">Featured</div>
        <div className="car-image">
          <img src={car.image} alt={car.name} />
        </div>
        <div className="car-details">
          <h3>{car.name}</h3>
          <p>{car.km} | {car.fuel} | {car.location}</p>
          <h2>{car.price}</h2>
          <p className="emi">EMI at <span>{car.emi}</span></p>
          <a href="#" className="make-offer">Make Offer</a>
          <button className="seller-details" onClick={() => onOrderRequest(car)}>
            Order Request
          </button>
        </div>
      </div>
    );
  };
  

export default CarListing;
