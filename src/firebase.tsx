import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmC1wR5K3uMtPSoDzduPpLlobmt6ciX0M",
  authDomain: "chat-app-914f6.firebaseapp.com",
  projectId: "chat-app-914f6",
  storageBucket: "chat-app-914f6.appspot.com",
  messagingSenderId: "704930821804",
  appId: "1:704930821804:web:3cddbdabee9250e1b2d109",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
