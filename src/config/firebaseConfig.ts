// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWwhN1Fj_pmXn5Yp-MGrGMU3xOP2-23ds",
  authDomain: "auction-70c52.firebaseapp.com",
  projectId: "auction-70c52",
  storageBucket: "auction-70c52.appspot.com",
  messagingSenderId: "1049644434720",
  appId: "1:1049644434720:web:8c4f40ddb91961f870c345",
  measurementId: "G-7JPYNVZQS9"
};
// add firebase database
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
// export default app;


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage();
