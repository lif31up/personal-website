// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA1zRX8TJgBK_4xIeWMpKrc-GdPd27vrmc",
  authDomain: "personal-website-c5db2.firebaseapp.com",
  projectId: "personal-website-c5db2",
  storageBucket: "personal-website-c5db2.firebasestorage.app",
  messagingSenderId: "413109963399",
  appId: "1:413109963399:web:4c1cd7a35ba290f0a1c622",
  measurementId: "G-XY034NC7EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
