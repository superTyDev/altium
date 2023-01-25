import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
} from "./../components/fbauth.js";

import styles from "../styles/Login.module.css";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	const register = () => {
		if (!name) alert("Please enter name");
		registerWithEmailAndPassword(name, email, password);
	};

	useEffect(() => {
		if (loading) return;
		if (user) router.push("/dashboard");
	}, [user, loading, router]);

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
					<button className={styles.login__btn} onClick={register}>
						Register
					</button>
					<button
						className={[styles.login__btn, styles.login__google].join(" ")}
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
