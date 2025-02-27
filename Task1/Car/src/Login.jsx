import React, { useState } from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePhone = (value) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(value)) {
      setPhoneError("Enter a valid 10-digit phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePhone(phone) && validatePassword(password)) {
      const email = `${phone}@dscars14.com`; // Using phone as a unique identifier
      try {
        await signInWithEmailAndPassword(auth, email, password);
        
        // Role-based redirection
        if (phone === "9999999999") {
          navigate("/admin-dashboard"); // Redirect Admin
        } else {
          navigate("/user-dashboard"); // Redirect User
        }

      } catch (error) {
        if (error.code === "auth/user-not-found") {
          try {
            await createUserWithEmailAndPassword(auth, email, password);

            // Redirect after successful signup
            if (phone === "9999999999") {
              navigate("/admin-dashboard");
            } else {
              navigate("/user-dashboard");
            }

          } catch (signUpError) {
            alert("Failed to create account: " + signUpError.message);
          }
        } else {
          alert("Login failed: " + error.message);
        }
      }
    }
  };

  // Close modal and navigate to home page
  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        <div className="modal-content">
          <div className="modal-left">
            <img
              src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Passenger-Vehicle-desktop.jpg"
              alt="Car login visual"
              className="login-image"
            />
            <h2>A whole new world of Cars</h2>
          </div>
          <div className="modal-right">
            <h3>Log in to continue</h3>
            <form onSubmit={handleSubmit}>
              <label>Mobile number</label>
              <div className="input-group">
                <span>+91</span>
                <input
                  type="text"
                  placeholder="999 999 9999"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    validatePhone(e.target.value);
                  }}
                />
              </div>
              {phoneError && <p className="error">{phoneError}</p>}

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
              />
              {passwordError && <p className="error">{passwordError}</p>}

              <div className="whatsapp-optin">
                <input type="checkbox" id="whatsapp" />
                <label htmlFor="whatsapp">
                  Get instant updates from DSCARS14 on your WhatsApp.
                </label>
              </div>

              <button type="submit" className="otp-button" disabled={!phone || !password || phoneError || passwordError}>
                LOGIN
              </button>
            </form>

            <p className="terms">
              By logging in, you agree to DSCARS14's{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms & Conditions</a>.
            </p>

            <button
              className="signup-button"
              onClick={() => navigate("/signup")}
            >
              Don't have an account? Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
