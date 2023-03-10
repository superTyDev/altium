import Link from "next/link";
import React, { useState } from "react";

import styles from "../styles/Contact.module.css";
import lStyles from "../styles/Login.module.css";
import CountdownTimer from "./useCountdown";

export default function Contact({ errors, setErrors }) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [comments, setComments] = useState("");
	const [formState, setFormState] = useState(0);

	function validateForm() {
		var localErrors = [];
		if (!name) {
			localErrors.push({
				cont: "Please enter name",
				type: "warning",
				time: Date.now(),
			});
		}
		if (!comments) {
			localErrors.push({
				cont: "Please enter comments",
				type: "warning",
				time: Date.now(),
			});
		}
		if (localErrors.length == 0) {
			setErrors([
				...errors,
				{
					cont: "Submitted Successfully",
					type: "info",
					time: Date.now(),
				},
			]);
			setFormState(1);
		} else {
			setErrors([...errors, ...localErrors]);
		}
	}

	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<div style={{ textAlign: "center" }}>
					<h1>Contact Us</h1>

					<div className={styles.countdownTimer}>
						Next Rep Available In:
						<br />
						<CountdownTimer targetDate={new Date("Jul 5, 2023 5:37 PM")} />
					</div>
					<p>
						We value your time and opinion. Our team would love to hear from
						you!
					</p>
				</div>

				<div className={styles.cardCont}>
					<div className={styles.card}>
						<h2>Email</h2>
						<p>
							Customer Service:{" "}
							<a href="mailto: altiumaero@gmail.com">altiumaero@gmail.com</a>
						</p>
						<p>
							Legal:{" "}
							<a href="mailto: notmyproblem@gmail.com">
								NotMyProblem@gmail.com
							</a>
						</p>
					</div>
					<div className={styles.card}>
						<h2>Phone</h2>
						<p>
							<a href="tel:+18004387723">1 800 GET SPACE (438-7723)</a>
						</p>
					</div>
					<div className={styles.card}>
						<h2>Mail</h2>
						<p>
							<a>7320 Space Way, Lakeland, Florida</a>
						</p>
					</div>
					<div className={`${styles.card} ${styles.fullWidth}`}>
						<p>
							For further information please contact us with any questions. For
							anything involving luggage or carry-ons please contact us at{" "}
							<span>
								<a href="tel:+18004387723">1 800 GET SPACE (438-7723)</a>
							</span>
							, or email us at
							<a href="mailto: notmyproblem@gmail.com">
								NotMyProblem@gmail.com
							</a>
							. Any issues involving booking or refunds please contact us at{" "}
							<span>
								<a href="tel:+18004387723">1 800 GET SPACE (438-7723)</a>
							</span>
							, or email us at
							<a href="mailto: altiumaero@gmail.com">altiumaero@gmail.com</a>.
						</p>
					</div>
				</div>
				<h2>Feedback</h2>
				<div className={styles.feedbackForm}>
					{formState === 0 && (
						<>
							<div className={lStyles.input__container}>
								<i className="material-symbols-outlined">badge</i>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className={lStyles.login__textBox}
									placeholder="Name"
								/>
							</div>
							<div className={lStyles.input__container}>
								<i className="material-symbols-outlined">mail</i>
								<input
									type="text"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className={lStyles.login__textBox}
									placeholder="E-mail Address"
								/>
							</div>
							<div className={lStyles.input__container}>
								<i className="material-symbols-outlined">comment</i>
								<textarea
									type="text"
									value={comments}
									onChange={(e) => setComments(e.target.value)}
									className={lStyles.login__textBox}
									placeholder="I think that..."
								></textarea>
							</div>
							<button
								className={`${lStyles.login__btn} button`}
								onClick={validateForm}
							>
								Submit
							</button>
							<p>
								By submitting you agree to release your words for Altium&apos;s
								use. See <Link href="/cites">Terms of Use</Link> for more
								information. By entering an optional email address you agree to
								receive at max one email from Altium unless you agree further in
								subsequent conversation.
							</p>
						</>
					)}
					{formState === 1 && (
						<p>
							Thank you, {name}, for submitting.{" "}
							{email ? (
								<>We will reach out to {email} if we have any questions.</>
							) : (
								<></>
							)}
						</p>
					)}
				</div>
			</div>
		</>
	);
}
