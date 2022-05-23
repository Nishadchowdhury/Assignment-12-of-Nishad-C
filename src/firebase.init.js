// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs1FJyKtNxX-hxTsQGPJUEqmBZQTtETfk",
    authDomain: "laparts-a12-nishad.firebaseapp.com",
    projectId: "laparts-a12-nishad",
    storageBucket: "laparts-a12-nishad.appspot.com",
    messagingSenderId: "8436841022",
    appId: "1:8436841022:web:a653f2471af99a1f492f6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;