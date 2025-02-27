import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Hero Section */}
      <header className="hero">
        <h2>Find Your Dream Car at the Best Price</h2>
        <p>Buy & Sell Second-Hand Cars with Confidence</p>
        <button className="explore-button">Explore Cars</button>
      </header>

      {/* Featured Cars Section */}
      <section className="featured-cars">
        <h3>Featured Cars</h3>
        <div className="car-list">
          <div className="car-card">
            <img src="https://source.unsplash.com/300x200/?car,luxury" alt="Car 1" />
            <p>Toyota Fortuner - ₹20,00,000</p>
          </div>
          <div className="car-card">
            <img src="https://source.unsplash.com/300x200/?car,suv" alt="Car 2" />
            <p>Hyundai Creta - ₹15,00,000</p>
          </div>
          <div className="car-card">
            <img src="https://source.unsplash.com/300x200/?car,sports" alt="Car 3" />
            <p>BMW 3 Series - ₹30,00,000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
