import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../components/fbauth.js";
import { db } from "./../components/fbdata.js";
import { doc, setDoc, addDoc, collection, Timestamp } from "firebase/firestore";

import styles from "../styles/Quote.module.css";
import lStyles from "../styles/Login.module.css";
import { useRouter } from "next/router";

function collapse() {
	var coll = document.getElementsByClassName("collapsible");
	if (coll) {
		for (var i = 0; i < coll.length; i++) {
			coll[i].onclick = function () {
				this?.classList.toggle("active");
				var content = this?.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			};
		}
	}
}

function onPageLoad() {
	collapse();
}

function ccFormat(value) {
	const v = value
		.replace(/\s+/g, "")
		.replace(/[^0-9]/gi, "")
		.substr(0, 16);
	const parts = [];

	for (let i = 0; i < v.length; i += 4) {
		parts.push(v.substr(i, 4));
	}

	return parts.length > 1 ? parts.join(" ") : value;
}

function LoginStrip({ user, name, setName, email, setEmail }) {
	if (user) {
		// console.log(user);
		return (
			<>
				<div className={styles.loginDetails}>
					Purchasing as {user.displayName}.{" "}
					<Link href="/dashboard">View Dashboard</Link>
				</div>
			</>
		);
	} else {
		return (
			<div>
				<div className={styles.loginDetails}>
					<Link href="/login?redirect=/checkout">Login to Save Info</Link>
				</div>
				{/* <div className={lStyles.input__container}>
					<i className="material-symbols-outlined">account_circle</i>
					<input
						type="text"
						className={lStyles.login__textBox}
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full Name"
						key={"nonLogin_nameInput"}
					/>
				</div> */}
				<div className={lStyles.input__container}>
					<i className="material-symbols-outlined">mail</i>
					<input
						type="text"
						className={lStyles.login__textBox}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="E-mail Address"
						key={"nonLogin_emailInput"}
					/>
				</div>
			</div>
		);
	}
}

export default function Quote({ errors, setErrors }) {
	const router = useRouter();
	const [formStep, setFormStep] = React.useState(0);

	useEffect(() => {
		onPageLoad();
	}, [formStep]);

	const [price, setPrice] = useState({ init: 0 });
	const [trip, setTrip] = useState("Select Trip On Image");
	const [passengers, setPassengers] = useState(1);
	const [launchDate, setLaunchDate] = useState("spring23");
	const [confNum, setConfNum] = useState(null);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const [cc, setCC] = useState({});

	const [user, loading, error] = useAuthState(auth);
	// const router = useRouter();

	function sumPrice() {
		return Object.values(price).reduce((sum, i) => sum + i) * passengers;
	}

	function addOns() {
		return Object.keys(price).reduce(function (result, key) {
			if (key != "init") result.push(key);
			return result;
		}, []);
	}

	function ExpandPrice() {
		var tempList = [];
		// console.log(price);
		Object.keys(price).forEach((key) => {
			const result = key.replace(/([A-Z])/g, " $1");
			if (key != "init")
				tempList.push(
					<>
						<td>Add On</td>
						<td>{result.charAt(0).toUpperCase() + result.slice(1)}</td>
						<td>${price[key].toLocaleString()}</td>
					</>
				);
		});
		// console.log(tempList);
		return <tr>{tempList}</tr>;
	}

	async function checkout() {
		var validCheckout = true;
		var localErrors = [];
		if (sumPrice == 0) {
			localErrors.push({
				cont: "No Purchase",
				type: "warning",
				time: Date.now(),
			});
		}
		if (!trip) {
			localErrors.push({
				cont: "Please Select Trip",
				type: "warning",
				time: Date.now(),
			});
		}
		if (!email && !user) {
			localErrors.push({
				cont: "Please Login or Enter Email",
				type: "warning",
				time: Date.now(),
			});
		} else if (!user) {
			if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
				localErrors.push({
					cont: "Invalid Email",
					type: "warning",
					time: Date.now(),
				});
			}
		}
		if (!cc.ccnum || !cc.cvv || !cc.expMon || !cc.expYear) {
			localErrors.push({
				cont: "Please Enter Credit Card Info",
				type: "warning",
				time: Date.now(),
			});
		} else {
			if (cc.ccnum.replaceAll(" ", "").length != 16) {
				localErrors.push({
					cont: "Invalid Credit Card",
					type: "warning",
					time: Date.now(),
				});
			}
			if (parseInt(cc.cvv?.length) > 4) {
				localErrors.push({
					cont: "Invalid CVV",
					type: "warning",
					time: Date.now(),
				});
			}
			if (
				parseInt(cc.expMon?.length) > 2 ||
				parseInt(cc.expMon?.length) < 2 ||
				parseInt(cc.expMon) > 12
			) {
				localErrors.push({
					cont: "Invalid Month (mm)",
					type: "warning",
					time: Date.now(),
				});
			}
			if (
				parseInt(cc.expYear?.length) > 4 ||
				parseInt(cc.expYear?.length) < 4 ||
				parseInt(cc.expYear) < 2023
			) {
				localErrors.push({
					cont: "Invalid Year (yyyy)",
					type: "warning",
					time: Date.now(),
				});
			}
		}
		if (localErrors.length == 0) {
			var tempLaunchDate = launchDate;

			tempLaunchDate = tempLaunchDate
				.replace("spring", "March 3,")
				.replace("summer", "June 6,")
				.replace("fall", "September 8,")
				.replace("winter", "December 12,");
			tempLaunchDate += " 8:00 AM EST";

			const flighPlan = await addDoc(collection(db, "flights"), {
				trip: trip,
				passengers: passengers,
				email: user?.email || email,
				uid: user?.uid || "noAccount",
				addOns: addOns(),
				launchDate: Timestamp.fromDate(new Date(tempLaunchDate)),
			});
			setConfNum(flighPlan.id);

			setFormStep(2);
			setErrors([{ cont: "Purchased", type: "info", time: Date.now() }]);
		} else {
			setErrors([...errors, ...localErrors]);
		}
	}

	return (
		<>
			<div className="navSpacer"></div>
			{formStep === 0 && (
				<>
					<div className="page flex">
						<div className="right">
							<h1 className="title">Buy Tickets</h1>
							<form
								action="/checkout"
								method="POST"
								className={styles.ticketForm}
								id="ticketForm"
							>
								<label htmlFor="date">Launch Date</label>
								<div>
									<select
										name="launchDate"
										id="date"
										value={launchDate}
										onChange={(e) => setLaunchDate(e.target.value)}
									>
										<option value="spring23">Spring 2023</option>
										<option value="summer23">Summer 2023</option>
										<option value="fall23">Fall 2023</option>
										<option value="winter23">Winter 2023</option>
										<option value="spring24">Spring 2024</option>
										<option value="summer24">Summer 2024</option>
										<option value="fall24">Fall 2024</option>
										<option value="winter24">Winter 2024</option>
									</select>
								</div>

								<label htmlFor="passengers">Passengers</label>
								<div className={styles.numInput}>
									<button
										type="button"
										className="button"
										onClick={(e) => {
											setPassengers(Math.max(passengers - 1, 1));
										}}
									>
										-
									</button>
									<input
										id="passengers"
										type="number"
										value={passengers}
										onChange={(e) => setPassengers(e.target.value)}
										min="1"
										max="20"
									/>
									<button
										type="button"
										className="button"
										onClick={(e) => {
											setPassengers(Math.min(passengers + 1, 20));
										}}
									>
										+
									</button>
								</div>

								<label htmlFor="trip">Trip</label>
								<div className={styles.trip} id="trip">
									{trip}
								</div>

								<div className={styles.moreOptions} id="moreOptions">
									<button
										type="button"
										className="collapsible"
										style={{ fontWeight: "bolder" }}
									>
										More Options
									</button>
									<div className="collapCont">
										<div className={styles.collapCont}>
											<label
												className={styles.checkContainer}
												htmlFor="customSuit"
											>
												<input
													type="checkbox"
													id="customSuit"
													name="customSuit"
													value="customSuit"
													onChange={(e) => {
														setPrice({
															...price,
															customSuit: e.target.checked ? 1000 : 0,
														});
													}}
												/>
												<span className={styles.checkmark}></span>
												Custom Suit
												<i
													title="Wear and take home your own customized suit"
													className="material-symbols-outlined"
												>
													info
												</i>
											</label>
											<label
												className={styles.checkContainer}
												htmlFor="flighMeal"
											>
												<input
													type="checkbox"
													id="flighMeal"
													name="flighMeal"
													value="flightMeal"
													onChange={(e) => {
														setPrice({
															...price,
															flightMeal: e.target.checked ? 500 : 0,
														});
													}}
												/>
												<span className={styles.checkmark}></span>
												In-Flight Meal Service{" "}
												<i
													title="À La Carte with Meal of the Day"
													className="material-symbols-outlined"
												>
													info
												</i>
											</label>
											<label
												className={styles.checkContainer}
												htmlFor="extraLuggage"
											>
												<input
													type="checkbox"
													id="extraLuggage"
													name="extraLuggage"
													value="extraLuggage"
													onChange={(e) => {
														setPrice({
															...price,
															extraLuggage: e.target.checked ? 750 : 0,
														});
													}}
												/>
												<span className={styles.checkmark}></span>
												Extra Luggage (+ 50 lbs)
												<i
													title="Bump the per capita weight limit to 300 lbs"
													className="material-symbols-outlined"
												>
													info
												</i>
											</label>
										</div>
									</div>
								</div>

								<label htmlFor="price">
									Total{" "}
									<i title="Tax Included" className="material-symbols-outlined">
										info
									</i>
								</label>
								<div className={styles.price} id="price">
									${sumPrice().toLocaleString()}
								</div>

								<div>
									<button
										type="button"
										className={`button ${styles.next}`}
										onClick={(e) => {
											sumPrice() > 0
												? setFormStep(formStep + 1)
												: setErrors([
														...errors,
														{
															cont: "No Trip Selected",
															type: "warning",
															time: Date.now(),
														},
												  ]);
										}}
									>
										<div>
											<i className="material-symbols-outlined">lock </i>Secure
											Checkout
										</div>
									</button>
								</div>

								<div className={styles.moreOptions} id="moreOptions">
									<button
										type="button"
										className="collapsible"
										style={{ fontWeight: "bolder" }}
									>
										Fine Print
									</button>
									<div className="collapCont">
										<div className={styles.collapCont}>
											<div>Max Height: 6&apos;6&quot;</div>
											<div>Min Height: 4&apos;</div>
											<div>Max Weight: 250 lbs</div>
											<div>Min Age: 12</div>
											<div>Must pass fitness and training course.</div>
											<div>
												By purchasing a ticket you agree to our{" "}
												<Link href="/cites#privacy">privacy policy</Link> and{" "}
												<Link href="/cites#terms">terms of use</Link>.
											</div>
											<div>
												Refunds will not be made closer than 1 month from
												launch.
											</div>
										</div>
									</div>
								</div>
								<p>
									Email{" "}
									<Link href="mailto:notMyProblem@gmail.com">
										NotMyProblem@gmail.com
									</Link>{" "}
									for group pricing.
								</p>
							</form>
						</div>
						<div className="left">
							<div className={styles.solarSystem}>
								<input
									type="radio"
									name="tripSelector"
									id="moon"
									value="Moon"
									form="ticketForm"
									onChange={(e) => {
										setTrip(e.target.value);
										setPrice({ ...price, init: 7000 });
									}}
								/>
								<label htmlFor="moon" className={styles.moon}>
									<div className={styles.memo}>
										<Image
											src={
												"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/moon.webp?v=1674935256993"
											}
											width={50}
											height={50}
											alt="Moon"
										/>
										<div>Moon</div>
									</div>
								</label>

								<input
									type="radio"
									name="tripSelector"
									id="iss"
									value="ISS"
									form="ticketForm"
									onChange={(e) => {
										setTrip(e.target.value);
										setPrice({ ...price, init: 3000 });
									}}
								/>
								<label htmlFor="iss" className={styles.iss}>
									<div className={styles.memo}>
										<Image
											src={
												"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/iss.webp?v=1674935261306"
											}
											width={151}
											height={50}
											alt="ISS"
										/>
										<div>ISS</div>
									</div>
								</label>

								<input
									type="radio"
									name="tripSelector"
									id="strat"
									value="Stratosphere"
									form="ticketForm"
									onChange={(e) => {
										setTrip(e.target.value);
										setPrice({ ...price, init: 1000 });
									}}
								/>
								<label htmlFor="strat" className={styles.strat}>
									<div className={styles.memo}>
										<Image
											src={
												"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sr72ico.webp?v=1674935254099"
											}
											width={78}
											height={50}
											alt="Strat"
										/>
										<div>Stratosphere</div>
									</div>
								</label>
								<label className={styles.earth}>
									<Image
										className={styles.backgroundImage}
										src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/earth.webp?v=1674686609885"
										width={400}
										height={400}
										alt="Earth"
									/>
								</label>
							</div>
						</div>
					</div>
				</>
			)}
			{formStep === 1 && (
				<>
					<div className="page">
						<h1>Checkout</h1>
						<LoginStrip
							key={"nonLoginData"}
							user={user}
							name={name}
							setName={setName}
							email={email}
							setEmail={setEmail}
						/>
						<hr />
						<div className={styles.cart}>
							<h2>Cart</h2>
							<table>
								<tbody>
									<tr>
										<td>Trip</td>
										<td>{trip}</td>
										<td>${price.init.toLocaleString()}</td>
									</tr>
									<ExpandPrice />
									<tr>
										<td>Passengers</td>
										<td></td>
										<td>{passengers}</td>
									</tr>
									<tr>
										<td>Total</td>
										<td></td>
										<td>${sumPrice().toLocaleString()}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<hr />
						<div className={lStyles.input__container}>
							<i className="material-symbols-outlined">credit_card</i>
							<input
								type="text"
								className={lStyles.login__textBox}
								value={ccFormat(cc.ccnum || "")}
								onChange={(e) => setCC({ ...cc, ccnum: e.target.value })}
								placeholder="Credit Card"
							/>
							<input
								type="number"
								className={`${lStyles.login__textBox} ${styles.securityCode}`}
								value={cc.cvv}
								onChange={(e) => setCC({ ...cc, cvv: e.target.value })}
								placeholder="CVV"
							/>
						</div>
						<div className={lStyles.input__container}>
							<i className="material-symbols-outlined">calendar_month</i>
							<input
								type="number"
								className={`${lStyles.login__textBox}`}
								value={cc.expMon}
								onChange={(e) => setCC({ ...cc, expMon: e.target.value })}
								placeholder="Expiration Month (mm)"
							/>
							<input
								type="number"
								className={`${lStyles.login__textBox} ${styles.securityCode}`}
								value={cc.expYear}
								onChange={(e) => setCC({ ...cc, expYear: e.target.value })}
								placeholder="Expiration Year (yyyy)"
							/>
						</div>
					</div>
					<div className="spacer"></div>
				</>
			)}
			{formStep === 2 && (
				<>
					<div className="page">
						<h1>Thank you for your purchase!</h1>
						<p>
							<strong>Confirmation Num:</strong>
							{confNum}
						</p>
						<p>
							Your ticket will be emailed to you shortly. If you have an
							account, the ticket will appear in dashboard.
						</p>
						<p>
							On launch day, bring the{" "}
							<strong>QR Code Ticket and Proof of Identity</strong>. Please
							arrive at <strong>8 AM EST</strong> to provide time for space suit
							fitting and other pre-launch settup.
						</p>
						<p>
							In the meantime, don&apos;t forget to complete the training course
							and submit a physical.
						</p>
						<p>Thanks for choosing Altium Aero!</p>
						<i>rocket_launch</i>
					</div>
					<div className="spacer"></div>
				</>
			)}
			<div className={styles.overlayBar}>
				<div className={styles.overlayLeft}>
					<Link type="button" href="/flights">
						Learn about Flights &rarr;
					</Link>
				</div>
				<div className="spacer"></div>
				<div className={styles.overlayRight}>
					<div>Total: ${sumPrice().toLocaleString()}</div>
					<div>
						{formStep === 0 && (
							<button
								type="button"
								className="button"
								onClick={(e) => {
									sumPrice() > 0
										? setFormStep(formStep + 1)
										: setErrors([
												...errors,
												{
													cont: "No Trip Selected",
													type: "warning",
													time: Date.now(),
												},
										  ]);
								}}
							>
								<div>
									<i className="material-symbols-outlined">lock</i>Secure
									Checkout
								</div>
							</button>
						)}{" "}
						{formStep === 1 && (
							<>
								<div className={styles.buttonCont}>
									<button
										type="button"
										className="button"
										onClick={(e) => setFormStep(formStep - 1)}
									>
										<div>
											<i className="material-symbols-outlined">
												add_shopping_cart
											</i>
											Edit Cart
										</div>
									</button>
									<button
										type="button"
										form="ticketForm"
										onClick={checkout}
										className="button"
									>
										<div>
											<i className="material-symbols-outlined">lock</i>Purchase
										</div>
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
