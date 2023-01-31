// Use Google Firebase for Auth so it's not our problem
// 9/24/22

// Import the functions you need from the SDKs you need
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { app, auth } from "./fbauth.js";
import { db } from "./fbdata.js";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Sign In With Google
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// Sign In With Email/Password
const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// Register New User
const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const { user } = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		await updateProfile(user, { displayName: name });

		await addDoc(collection(db, "users"), {
			uid: user.uid,
			displayName: name,
			authProvider: "local",
			email,
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// Reset Link
const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// Logout
const logout = () => {
	signOut(auth);
};

// Make functions accessible elsewhere
export {
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
};
