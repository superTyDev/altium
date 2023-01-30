import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../components/fbauth.js";
import {
	registerWithEmailAndPassword,
	signInWithGoogle,
} from "./../components/fblogin.js";

import styles from "../styles/Login.module.css";

export default function Register({ errors, setErrors }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (loading) return;
		if (user) router.push("/dashboard");
	}, [user, loading, router]);

	function validateForm() {
		var localErrors = [];

		if (!email) {
			localErrors.push({
				cont: "Please enter email",
				type: "warning",
				time: Date.now(),
			});
		} else {
			if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
				localErrors.push({
					cont: "Invalid Email",
					type: "warning",
					time: Date.now(),
				});
			}
		}
		if (!name) {
			localErrors.push({
				cont: "Please enter name",
				type: "warning",
				time: Date.now(),
			});
		} else {
			if (name.length < 5) {
				localErrors.push({
					cont: "Name too short",
					type: "warning",
					time: Date.now(),
				});
			}
		}
		if (!password) {
			localErrors.push({
				cont: "Please enter password",
				type: "warning",
				time: Date.now(),
			});
		}
		if (errors.length == 0) {
			registerWithEmailAndPassword(name, email, password);
			router.push("/dashboard");
		} else {
			setErrors([...errors, ...localErrors]);
		}
	}

	return (
		<>
			<div className="navSpacer"></div>

			<div className={styles.login}>
				<div className={styles.login__container}>
					<h1>Register</h1>
					<div className={styles.input__container}>
						<i className="material-symbols-outlined">account_circle</i>
						<input
							type="text"
							className={styles.login__textBox}
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Full Name"
						/>
					</div>
					<div className={styles.input__container}>
						<i className="material-symbols-outlined">mail</i>
						<input
							type="text"
							className={styles.login__textBox}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="E-mail Address"
						/>
					</div>
					<div className={styles.input__container}>
						<i className="material-symbols-outlined">key</i>
						<input
							type="password"
							className={styles.login__textBox}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</div>
					<button
						className={`${styles.login__btn} button`}
						onClick={validateForm}
					>
						Register
					</button>
					<button
						className={`${styles.login__btn} ${styles.login__google} button`}
						onClick={signInWithGoogle}
					>
						Register with Google
					</button>
					<div>
						Already have an account? <Link href="/">Login</Link> now.
					</div>
					<div>Note: Login with google is blocked on PCSP computers</div>
				</div>
			</div>
		</>
	);
}
