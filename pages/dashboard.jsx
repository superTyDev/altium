import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../components/fbauth.js";
import { db } from "./../components/fblogin.js";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Dashboard.module.css";

/**
 * The dashboard function pulls tickets
 * Made on 9/26/22
 */

const ListFlights = ({ flights }) => {
	var flightCards = [];

	flights.forEach((flight) => {
		const imageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${flight.id}`;
		flightCards.push(
			<div className={styles.card}>
				<div className={styles.innerCard}>
					<h2>{flight.trip}</h2>
					<p>
						{flight.passengers}{" "}
						{flight.passengers == 1 ? "Passenger" : "Passengers"}
					</p>
					<p>
						Launches {flight.launchDate.toDate().toLocaleDateString()}{" "}
						{flight.launchDate.toDate().toLocaleTimeString()}
					</p>
				</div>
				<Image src={imageUrl} width={150} height={150} />
			</div>
		);
	});

	if (flightCards.length) {
		return (
			<div className={styles.cardCont}>
				{flightCards}
				<Link href="/quote">
					<i className={styles.buyMore} title="Buy a Ticket">
						add
					</i>
				</Link>
			</div>
		);
	} else {
		return (
			<div className={styles.cardCont}>
				<div className={styles.empty}>
					<i className={styles.left}>rocket_launch</i>
					<div className={styles.right}>
						Looks like there&apos;s space,
						<br />
						buy a ticket to fill up this area.
					</div>
				</div>
				<div className="buttonCont">
					<Link href="/quote" className="button">
						Buy a Ticket
					</Link>
					<Link href="/flight" className="button">
						Explore Flights
					</Link>
				</div>
			</div>
		);
	}
};

const getFlights = async ({ setFlights, user }) => {
	const q = query(collection(db, "flights"), where("email", "==", user.email));

	const flightDocs = await getDocs(q);
	console.log(flightDocs.docs);
	const flightData = flightDocs.docs.map((doc) => doc.data());
	setFlights(flightData);
};

export default function Dashboard() {
	const [user, loading, error] = useAuthState(auth);
	const [flights, setFlights] = useState([]);
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/login");
		} else {
			console.log("hello");

			getFlights({ setFlights, user });
		}
	}, [user, router]);

	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<h1>Dashboard</h1>
				<ListFlights flights={flights} />
			</div>
		</>
	);
}
