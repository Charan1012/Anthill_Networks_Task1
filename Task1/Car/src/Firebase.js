import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfh2MLhSX-nyUcrxB_5FT57R0KtJdN1Ok",
  authDomain: "carsell-e725b.firebaseapp.com",
  databaseURL: "https://carsell-e725b-default-rtdb.firebaseio.com",  // Add this line for Realtime Database
  projectId: "carsell-e725b",
  storageBucket: "carsell-e725b.appspot.com",  // Corrected the storage bucket URL
  messagingSenderId: "348556634430",
  appId: "1:348556634430:web:38c019564169e72a5f246f",
  measurementId: "G-TMVXMW99SP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Export modules for use in other files
export { auth, database, analytics };
