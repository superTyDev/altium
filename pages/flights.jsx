import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useMemo, useState } from "react";

import styles from "../styles/Flights.module.css";

function Cards({ cardArray, setCardSelected }) {
	var cards = [];

	cardArray.forEach((element, index) => {
		cards.push(
			<div
				className={styles.card}
				onClick={(e) => setCardSelected(index)}
				key={index}
			>
				<div className={styles.innerCard}>
					<h3>
						{element.title}
						<span>
							Expand <i>arrow_forward_ios</i>
						</span>
					</h3>
					{/* <p>{element.mini    Explanation}</p> */}
				</div>
				<Image
					src={element.image}
					width={400}
					height={120}
					alt={element.imageAlt}
				/>
			</div>
		);
	});

	return <div className={styles.cardCont}>{cards}</div>;
}

function LargeCard({ cardArray, cardSelected }) {
	if (cardSelected == -1) {
		return (
			<div className={styles.cardCont}>
				<div className={styles.card}>
					<div className={styles.innerCard}>
						<p>Click on a card above.</p>
					</div>
				</div>
			</div>
		);
	}
	const card = cardArray[cardSelected];

	return (
		<div className={styles.cardCont}>
			<div className={`${styles.card} ${styles.largeCard}`}>
				<div className={styles.innerCard}>
					<h2>{card.title}</h2>
					<p>Length: {card.length}</p>
					<p>Price: ${card.price}</p>
					<p>{card.miniExplanation}</p>
					<div className="buttonCont">
						<Link href="/quote" className="button">
							Buy a Ticket
						</Link>
					</div>
				</div>
				<Image
					className={styles.imageRight}
					src={card.image}
					width={300}
					height={500}
					alt={card.imageAlt}
				/>
			</div>
		</div>
	);
}

export default function Flights() {
	const router = useRouter();
	const [cardSelected, setCardSelected] = useState(-1);

	const cardArray = useMemo(() => {
		return [
			{
				title: "Moon",
				imageAlt: "Full Moon",
				image:
					"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/moon-labyr-nth-deviantart-0.png?v=1673519854551",
				miniExplanation:
					"Take a trip into the frontier of space. Join the ranks of astronauts as you travel to the moon. Every guest has the opportunity to witness the galaxy on a space walk.",
				length: "1 Week",
				price: (7000).toLocaleString(),
				longExplanation: "",
			},
			{
				title: "ISS",
				imageAlt: "International Space Station in Front of the Earth",
				image:
					"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930",
				miniExplanation:
					"Looking for an extended stay in space? Spend two days in this weightless environment.",
				longExplanation: "",
				length: "3 Days",
				price: (3000).toLocaleString(),
			},
			{
				title: "Stratosphere",
				imageAlt: "Earth's Stratosphere",
				image:
					"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/stratosphere.webp?v=1673519740927",
				miniExplanation:
					"Take a day trip into space. You'll see amazing views and experience zero-g without the hassle of being an astronaut.",
				longExplanation: "",
				length: "Day Trip",
				price: (1000).toLocaleString(),
			},
		];
	}, []);

	useEffect(() => {
		const toSelectCard = router.asPath.split("#")[1];

		if (parseInt(toSelectCard) in Object.keys(cardArray)) {
			setCardSelected(toSelectCard);
		}
	}, [router, cardArray]);

	return (
		<>
			<div className="navSpacer"></div>
			<Image
				className={styles.backgroundImage}
				alt="Space Background"
				src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sunRise.webp?v=1674255059462"
				width={1980}
				height={1080}
			/>
			<div className="page">
				<h1 style={{ textAlign: "center" }}>Flights</h1>
				<Cards cardArray={cardArray} setCardSelected={setCardSelected} />
				<LargeCard cardArray={cardArray} cardSelected={cardSelected} />
				<h2 id="dates">Upcoming Dates</h2>
				<div className={styles.dates}>
					<div className={styles.innerDate}>
						<div>March 3, 2023</div>
						<div>June 6, 2023</div>
						<div>September 8, 2023</div>
						<div>December 12, 2023</div>
						<div>March 3, 2024</div>
						<div>June 6, 2024</div>
						<div>September 8, 2024</div>
						<div>December 12, 2024</div>
					</div>
					<div className="buttonCont">
						<Link className="button" href="/quote">
							Book Now
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
