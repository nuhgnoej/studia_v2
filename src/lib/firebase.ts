// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgS2-Ek5go3oQuRhcjoKlLe9e198nLEbI",
  authDomain: "studia-32dc7.firebaseapp.com",
  projectId: "studia-32dc7",
  storageBucket: "studia-32dc7.firebasestorage.app",
  messagingSenderId: "258669826284",
  appId: "1:258669826284:web:f5367caffa0b2693a9d5c9",
  measurementId: "G-CKH518D8MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ✅ Export auth and db
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);

// (Optional)
// export const analytics = getAnalytics(app);