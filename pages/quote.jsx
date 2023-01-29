import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import styles from "../styles/Quote.module.css";

function collapse() {
	var coll = document.getElementsByClassName("collapsible");
	if (coll) {
		for (var i = 0; i < coll.length; i++) {
			coll[i].onclick = function () {
				this.classList.toggle("active");
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

export default function Quote() {
	useEffect(() => {
		onPageLoad();
	}, []);

	const [price, setPrice] = useState({ init: 0 });
	const [trip, setTrip] = useState("Select Trip On Image");
	const [passengers, setPassengers] = useState(1);

	return (
		<>
			<div className="navSpacer"></div>
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
							<select name="launchDate" id="date">
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
									setPassengers(Math.max(passengers - 1, 0));
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
									<label className={styles.checkContainer} htmlFor="customSuit">
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
									<label className={styles.checkContainer} htmlFor="flighMeal">
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
							$
							{(
								Object.values(price).reduce((sum, i) => sum + i) * passengers
							).toLocaleString()}
						</div>

						<div>
							<button type="submit" className="button">
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
										Refunds will not be made closer than 1 month from launch.
									</div>
								</div>
							</div>
						</div>
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
			<div className={styles.overlayBar}>
				<div className={styles.overlayLeft}>
					<Link type="button" href="/flights">
						Learn about Flights &rarr;
					</Link>
				</div>
				<div className="spacer"></div>
				<div className={styles.overlayRight}>
					<div>
						Total: $
						{(
							Object.values(price).reduce((sum, i) => sum + i) * passengers
						).toLocaleString()}
					</div>
					<div>
						<button type="submit" form="ticketForm" className="button">
							<div>
								<i className="material-symbols-outlined">lock</i>Secure Checkout
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
