import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validatePhone(phone) && validatePassword(password)) {
      const email = `${phone}@dscars14.com`; // Using phone as a unique identifier
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
        navigate("/login"); // Redirect to login page after successful signup
      } catch (error) {
        alert("Failed to create account: " + error.message);
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
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
            <h3>Sign up to continue</h3>
            <form onSubmit={handleSignup}>
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

              <button type="submit" className="otp-button" disabled={!phone || !password || phoneError || passwordError}>
                SIGN UP
              </button>
            </form>

            <p className="terms">
              By signing up, you agree to DSCARS14's{" "}
              <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms & Conditions</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;