import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../styles/Ships.module.css";

export default function Ships() {
	return (
		<>
			<div>
				<div className={styles.hero}>
					<div className="navSpacer"></div>
					{/* <Image
						className={styles.backgroundImg}
						src={
							"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sunRise.webp?v=1674255059462"
						}
						width={1980}
						height={500}
						alt="Sun Rise over Earth from Space"
					/> */}
					<h1>About</h1>
				</div>
				<div className={styles.section}>
					<div className={styles.altCont}>
						<p>
							Welcome to Altium Aeronautics! We are a cutting-edge space travel
							company dedicated to providing safe and exciting intergalactic
							journeys. Our team of highly experienced astronauts, engineers and
							scientists specialize in creating the most advanced spacecrafts
							for our customers&apos; needs.
						</p>

						<p>
							Since our founding in 2031, we have been at the forefront of space
							exploration technology, offering travelers an experience that is
							both comfortable and secure. Our state-of-the-art vessels are
							designed with safety as a top priority, enabling passengers to
							explore the cosmos without worrying about their safety or
							security. We offer traditional trips around Earth&apos;s orbit as
							well as deep space missions for those who want something more
							adventurous.
						</p>

						<p>
							At Altium Aeronautics, we believe that everyone should have access
							to space travel regardless of financial means or technical
							knowledge. That&apos;s why we strive to keep our prices low while
							still providing high quality service and equipment – so that
							anyone can enjoy the wonders of outer space without breaking the
							bank!
						</p>

						<p>
							If you&apos;re looking for an interstellar adventure like no other
							then look no further than Altium Aeronautics!
						</p>
						<div className="buttonCont">
							<Link href="/flights" className="button">
								View Flights
							</Link>
							<Link href="#ships" className="button">
								See Ships
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.hero} id="ships">
					<h2>Meet the Ships</h2>
				</div>

				<div className={styles.backgroundSection}>
					<div className={styles.section} id="Darkhawk">
						<Carousel
							className={styles.sectionImage}
							autoPlay
							infiniteLoop
							showThumbs={false}
						>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sr726.webp?v=1674353619826"
									alt="image3"
									loading="lazy"
								/>
								<p className="legend">Darkhawk in Hanger</p>
							</div>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sr724.webp?v=1674353628090"
									alt="image1"
									loading="lazy"
								/>
								<p className="legend">Darkhawk at Space</p>
							</div>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sr725.webp?v=1674353623764"
									alt="image2"
									loading="lazy"
								/>
								<p className="legend">Low Altitude Rendering</p>
							</div>
						</Carousel>
						<div className={styles.altCont}>
							<h2>SR 72 Darkhawk</h2>
							<p>
								The SR 72 Darkhawk is a revolutionary aircraft developed by
								Lockheed Martin and NASA. It is originally an unmanned, high
								altitude, supersonic aircraft capable of reaching speeds up to
								Mach 6. Due to its scram jet engine, it is able to fly to the
								edge of space in a few hours, making it ideal for space tourism.
							</p>
							<div className="buttonCont">
								<Link href="/quote" className="button">
									Book Darkhawk
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.section} id="Gibraltar">
						<Carousel
							className={styles.sectionImage}
							autoPlay
							infiniteLoop
							showThumbs={false}
						>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/modernShuttleShort.webp?v=1674259900863"
									alt="image1"
									loading="lazy"
								/>
								<p className="legend">SS Gibraltar in Space</p>
							</div>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/modernShuttleShort2.webp?v=1674258615375"
									alt="image2"
									loading="lazy"
								/>
								<p className="legend">Construction of the Gibraltar</p>
							</div>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/modernShuttleShort3.webp?v=1674258615375"
									alt="image3"
									loading="lazy"
								/>
								<p className="legend">
									Gibraltar&Aapos;s Space Launch Vehicle (SLV)
								</p>
							</div>
						</Carousel>
						<div className={styles.altCont}>
							<h2>SS Gibraltar</h2>
							<p>
								This revolutionary spacecraft is designed to take you to the
								moon and beyond. With its powerful engines and advanced
								navigation systems, the Gibraltar is Altium&apos;s medium
								distance shuttle. This shuttle is optimized for quick trips to
								the ISS or longer distance flights.
							</p>
							<div className="buttonCont">
								<Link href="/quote" className="button">
									Book Gibraltar
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.section} id="Malta">
						<Carousel
							className={styles.sectionImage}
							autoPlay
							infiniteLoop
							showThumbs={false}
						>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/redRocket.webp?v=1674258725776"
									alt="image1"
								/>
								<p className="legend">Malta Rainforest Launch</p>
							</div>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/redRocket2.webp?v=1674258725776"
									alt="image2"
								/>
								<p className="legend">Malta Low Impact Thrusters</p>
							</div>
							<div>
								<img
									src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/redRocket3.webp?v=1674258725776"
									alt="image3"
								/>
								<p className="legend">Malta in Hanger</p>
							</div>
						</Carousel>
						<div className={styles.altCont}>
							<h2>STS Malta</h2>
							<p>
								Altium&apos;s largest rocket is designed to carry payloads to
								the moon and beyond. With its state-of-the-art ion trust
								technology, the STS Malta is the perfect choice for those
								looking to explore the depths of space. With its comfortable
								interior, you can enjoy the journey in style.
							</p>
							<div className="buttonCont">
								<Link href="/quote" className="button">
									Book Malta
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
