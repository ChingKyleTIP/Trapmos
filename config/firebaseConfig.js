// Import the functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4OK6GO6B-QJO8ORIoBZH2PLYgw1eCMgk",
  authDomain: "trapmos-database.firebaseapp.com",
  projectId: "trapmos-database",
  storageBucket: "trapmos-database.appspot.com", // Fixed URL typo
  messagingSenderId: "587215722046",
  appId: "1:587215722046:web:be5cc2bc5cc6fe785c636f",
  measurementId: "G-TB3HWCVBF9" // Not used in React Native but can remain
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
