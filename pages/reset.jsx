import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "../styles/Login.module.css";
import { auth, sendPasswordReset } from "./../components/fbauth.js";

export default function Reset() {
	const [email, setEmail] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (loading) return;
		if (user) router.push("/dashboard");
	}, [user, loading, router]);

	return (
		<>
			<div className="navSpacer"></div>
			<div className={styles.login}>
				<div className={styles.login__container}>
					<h1>Reset</h1>
					<div className={styles.input__container}>
						<i className="material-symbols-outlined">account_circle</i>
						<input
							type="text"
							className={styles.login__textBox}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="E-mail Address"
						/>
					</div>
					<button
						className={styles.login__btn}
						onClick={() => sendPasswordReset(email)}
					>
						Send password reset email
					</button>
					<div>
						Do have an account? <Link href="/register">Register</Link> now.
					</div>
				</div>
			</div>
		</>
	);
}
