import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCI5rDlfcATPEyIcCymeTc1ATPZ_38OaDk",
    authDomain: "ai-recipe-finder-a1784.firebaseapp.com",
    projectId: "ai-recipe-finder-a1784",
    storageBucket: "ai-recipe-finder-a1784.firebasestorage.app",
    messagingSenderId: "386794328008",
    appId: "1:386794328008:web:26d47a6eb64a98063f7afd",
    measurementId: "G-VE9F3HX0HV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
