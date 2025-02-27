import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEAF3ch-oKUM05wU7IoFDV68fuvyGjTdo",
  authDomain: "anthill-c1d96.firebaseapp.com",
  databaseURL: "https://anthill-c1d96-default-rtdb.firebaseio.com/",  // Add this line for Realtime Database
  projectId: "anthill-c1d96",
  storageBucket: "anthill-c1d96.firebasestorage.app",
  messagingSenderId: "20664292783",
  appId: "1:20664292783:web:41bbbf0481fee864becb5a",
  measurementId: "G-Q55LNX7LS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Now you can use these services like auth, database, etc., in your app
export { auth, database, analytics };
