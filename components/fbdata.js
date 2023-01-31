// Use Google Firebase for Auth so it's not our problem
// 9/24/22

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { app } from "./fbauth.js";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = getFirestore(app);

// Make functions accessible elsewhere
export { db };
