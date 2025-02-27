import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Header.css"; // Add styles

const Header = () => {
  const [user, setUser] = useState(null);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="header">
      <h1>DS CARS14</h1>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/user-dashboard">Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
