// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-QUv6krQfc2-YNGOKXPQ6cQ5YhKFBmmM",
  authDomain: "crisdecoreact.firebaseapp.com",
  projectId: "crisdecoreact",
  storageBucket: "crisdecoreact.appspot.com",
  messagingSenderId: "282018452539",
  appId: "1:282018452539:web:c800973567a9a91ffff81e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {return app}


