import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import {
	auth,
	logInWithEmailAndPassword,
	signInWithGoogle,
} from "../components/fbauth.js";

import styles from "../styles/Login.module.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) {
			if (router.query.redirect != null) {
				router.push(router.query.redirect);
			} else {
				router.push("/dashboard");
			}
		}
	}, [user, loading, router]);
	return (
		<>
			<div className="navSpacer"></div>

			<div className={styles.login}>
				<div className={styles.login__container}>
					<h1>Login</h1>
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
						onClick={() => logInWithEmailAndPassword(email, password)}
					>
						Login
					</button>
					<button
						className={`${styles.login__btn} ${styles.login__google} button`}
						onClick={signInWithGoogle}
					>
						Login with Google
					</button>
					<div>
						<Link href="/reset">Forgot Password</Link>
					</div>
					<div>
						Do have an account? <Link href="/register">Register</Link> now.
					</div>
					<div>Note: Login with google is blocked on PCSP computers</div>
				</div>
			</div>
		</>
	);
}
