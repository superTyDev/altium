import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../components/fbauth.js";

import styles from "../styles/Login.module.css";
import cStyles from "../styles/Checkout.module.css";

export default function Checkout(req, res, next) {
	const [email, setEmail] = useState("");
	const [cc, setCC] = useState({});
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	function LoginStrip() {
		if (user) {
			return (
				<>
					<div className={cStyles.loginDetails}>
						Purchasing as {user.displayName}.{" "}
						<Link href="/dashboard">View Dashboard</Link>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div>
						<div className={cStyles.loginDetails}>
							<Link href="/login?redirect=/checkout">Login to Save Info</Link>
						</div>
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
					</div>
				</>
			);
		}
	}

	return (
		<>
			<div className="navSpacer"></div>

			<div className="page">
				<h1>Checkout</h1>
				<LoginStrip />
				<hr />

				<div className={styles.input__container}>
					<i className="material-symbols-outlined">credit_card</i>
					<input
						type="text"
						className={styles.login__textBox}
						value={name}
						onChange={(e) => setCC({ ...cc, ccnum: e.target.value })}
						placeholder="Credit Card"
					/>
					<input
						type="text"
						className={`${styles.login__textBox} ${cStyles.securityCode}`}
						value={email}
						onChange={(e) => setCC({ ...cc, secCode: e.target.value })}
						placeholder="Security Code"
					/>
				</div>
				<div className={styles.input__container}>
					<i className="material-symbols-outlined">calendar_month</i>
					<input
						type="date"
						className={`${styles.login__textBox}`}
						value={email}
						onChange={(e) => setCC({ ...cc, expiration: e.target.value })}
						placeholder="CC Expiration"
					/>
				</div>
			</div>
		</>
	);
}
