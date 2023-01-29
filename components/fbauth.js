// Use Google Firebase for Auth so it's not our problem
// 9/24/22

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCzwNKovl6kNJRUsXRr5UOFUd_1Aawyv08",
	authDomain: "altiumaeronautics.firebaseapp.com",
	projectId: "altiumaeronautics",
	storageBucket: "altiumaeronautics.appspot.com",
	messagingSenderId: "435264717392",
	appId: "1:435264717392:web:31a77cb3067e1bd1774755",
	measurementId: "G-BQTF60DW7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make functions accessible elsewhere
export { auth, app };
