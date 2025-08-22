import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEOG7xdoYZOIYDfMQXhvSnJaK8y7QraAg",
  authDomain: "react-auth-458e9.firebaseapp.com",
  projectId: "react-auth-458e9",
  storageBucket: "react-auth-458e9.firebasestorage.app",
  messagingSenderId: "303674152233",
  appId: "1:303674152233:web:052bc574e9714fe8f49338",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
