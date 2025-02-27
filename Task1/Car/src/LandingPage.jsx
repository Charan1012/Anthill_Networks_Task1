import React from "react";
import CarListing from "./CarListing";
import "./LandingPage.css";

const cars = [
    {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3767474_140591_1_1736150314259.jpg?q=80",
        name: "2019 Mercedes-Benz E-Class E 200",
        km: "49,000 km",
        fuel: "Petrol",
        location: "Injambakkam, Chennai",
        price: "Rs. 38 Lakh",
        emi: "Rs. 68,393",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3785461_140856_1_1736437442639.jpg?q=80",
        name: "2013 Maruti Suzuki Alto 800 Lxi",
        km: "1,02,159 km",
        fuel: "Petrol",
        location: "Sholinganallur, Chennai",
        price: "Rs. 2.32 Lakh",
        emi: "Rs. 10,393",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3802554_141308_1_1737534361531.jpg?q=80",
        name: "2021 Hyundai Creta SX",
        km: "25,000 km",
        fuel: "Diesel",
        location: "Anna Nagar, Chennai",
        price: "Rs. 17.5 Lakh",
        emi: "Rs. 32,500",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3807166_27932_1737705435064.jpg?q=80",
        name: "2018 Honda City VX CVT",
        km: "60,000 km",
        fuel: "Petrol",
        location: "T. Nagar, Chennai",
        price: "Rs. 11.8 Lakh",
        emi: "Rs. 22,000",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3815996_152960_1_1738239066307.jpg?q=80",
        name: "2020 Toyota Fortuner 4x4",
        km: "40,000 km",
        fuel: "Diesel",
        location: "Adyar, Chennai",
        price: "Rs. 42 Lakh",
        emi: "Rs. 75,000",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3817166_139682_1_1738332178597.jpg?q=80",
        name: "2022 Maruti Suzuki Baleno Zeta",
        km: "18,000 km",
        fuel: "Petrol",
        location: "Velachery, Chennai",
        price: "Rs. 8.75 Lakh",
        emi: "Rs. 16,000",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202501/3786259_140766_1_1736446328308.jpg?q=80",
        name: "2017 Mahindra XUV500 W10 AT",
        km: "85,000 km",
        fuel: "Diesel",
        location: "OMR, Chennai",
        price: "Rs. 13.5 Lakh",
        emi: "Rs. 25,000",
      },
      {
        image: "https://imgd.aeplcdn.com/300x225/vimages/202502/3820700_139479_1_1738598603905.jpg?q=80",
        name: "2019 Hyundai Verna SX(O)",
        km: "35,000 km",
        fuel: "Petrol",
        location: "Mylapore, Chennai",
        price: "Rs. 10.2 Lakh",
        emi: "Rs. 19,000",
      }
];

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Find Your Dream Car</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <CarListing key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
