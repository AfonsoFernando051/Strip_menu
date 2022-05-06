// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD20QdFIpOhdYBtL7oQL8jBGFJ4agzycig",
    authDomain: "menu-stripe.firebaseapp.com",
    projectId: "menu-stripe",
    storageBucket: "menu-stripe.appspot.com",
    messagingSenderId: "508192153445",
    appId: "1:508192153445:web:6453b0396f5e00efb5cb8c",
    measurementId: "G-PZ5BPQ6VEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);