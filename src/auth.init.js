import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFfD92kPYFkoHrkvOKwN9diSHkwEFR1qI",
  authDomain: "new-project-bf0ab.firebaseapp.com",
  projectId: "new-project-bf0ab",
  storageBucket: "new-project-bf0ab.firebasestorage.app",
  messagingSenderId: "30653415647",
  appId: "1:30653415647:web:8aaaf93a79175420aae96a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);