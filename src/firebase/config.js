// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDet8Q_5fVp8asc1EX9ZYyFdCHREQkdZYc",
    authDomain: "opengram-site.firebaseapp.com",
    projectId: "opengram-site",
    storageBucket: "opengram-site.appspot.com",
    messagingSenderId: "792475879174",
    appId: "1:792475879174:web:c1d83551a7d01194b1c087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and storage
const db=getDatabase(app);
const storage = getStorage(app);
export {db,storage};
