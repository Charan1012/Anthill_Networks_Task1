import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import LandingPage from "./LandingPage";
import RequestCar from "./RequestCar";
import RequestStatus from "./RequestStatus";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/request-car" element={<RequestCar />} />
        <Route path="/request-status" element={<RequestStatus />} />
        
      </Routes>
    </Router>
  );
}

export default App;
