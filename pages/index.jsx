import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import * as React from "react";

function rotateRocket(evt) {
	var rocket = document.querySelector("#model");
	if (rocket) {
		const rocketRect = rocket.getBoundingClientRect();
		const center_x = rocketRect.left + rocketRect.width / 2;

		var mouse_x = evt.pageX;
		var distance = ((center_x - mouse_x) / rocketRect.width) * 360;
		rocket.setAttribute("camera-orbit", `${distance}deg 70deg 100%`);
	}
}
function collapse() {
	// console.log("I ran");
	var coll = document.getElementsByClassName("collapsible");
	if (coll) {
		for (var i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function () {
				this?.classList.toggle("active");
				var content = this?.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			});
		}
	}
}

var slideIndex = 0;
function carousel() {
	var i;
	var x = document.getElementsByClassName("nameSlide");
	for (i = 0; i < x.length; i++) {
		x[i].classList.remove("show");
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1;
	}
	x[slideIndex - 1]?.classList.add("show");
	// setInterval(carousel, 2000); // Change image every 2 seconds
}

// function copyCarousel() {
// 	console.log("hello!!!");
// 	var original = document.querySelector(".scrollCarousel");
// 	original.classList.remove("pause");
// 	var clone = original.cloneNode(true);
// 	clone.classList.add("secondary");
// 	original.after(clone);
// }

function svgAnimation() {
	var triangle = document.querySelector("path");
	var stepCont = document.querySelector("#stepCont");
	var stepContHeight = stepCont?.getBoundingClientRect().height; // no need to recalc

	if (triangle && stepCont) {
		triangle.style.strokeDashoffset = 1;

		window.addEventListener("scroll", () => {
			var scrollpercent =
				(document.body.scrollTop + document.documentElement.scrollTop) /
				(document.documentElement.scrollHeight -
					document.documentElement.clientHeight);

			// console.log(
			//   (-stepCont.getBoundingClientRect().top +
			//     document.documentElement.clientHeight) /
			//     stepContHeight
			// );

			// triangle.style.strokeDashoffset = 1 - scrollpercent;
			triangle.style.strokeDashoffset =
				1.05 -
				(-stepCont?.getBoundingClientRect().top +
					document.documentElement.clientHeight) /
				stepContHeight;
		});
	}
}

function convertToSmoothLinks() {
	document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			this.scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}

function onPageLoad() {
	collapse();
	svgAnimation();
	convertToSmoothLinks();

	setInterval(carousel, 3000);
}

export default function Home() {
	if (typeof window !== "undefined") {
		document.addEventListener("mousemove", rotateRocket);

		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad);
		}
	}

	return (
		<>
			<Script
				type="module"
				src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
			></Script>
			<div className="hero">
				<div className="heroBackground">
					<model-viewer
						id="model"
						src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/saturnv?v=1673520475101"
						disable-zoom
						skybox-image="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/cubemap.webp?v=1673518418783"
						exposure="2"
					>
						<div className="progress-bar hide" slot="progress-bar">
							<div className="update-bar"></div>
						</div>
					</model-viewer>
				</div>
				<div className="heroRight">
					<div className="spacer"></div>
					<h1>Altium Aeronautics</h1>
					<p>Making Space Flight a Reality</p>
					<Link className="button" href="/quote">
						Get a Ticket
					</Link>
					<div className="spacer"></div>
				</div>
				<Link className="heroDown" href="#everyone" id="everyone">
					&#9660;
				</Link>
			</div>
			<div className="everyone">
				<h2>
					Space Travel for&nbsp;
					<span className="nameSlide">High Schoolers</span>
					<span className="nameSlide show">Teachers</span>
					<span className="nameSlide">Performers</span>
					<span className="nameSlide">Medics</span>
					<span className="nameSlide">Families</span>
				</h2>
				<div className="slider">
					<div className="slide-track">
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/hiers.jpg?v=1673518435437"
								}
								height={50}
								width={50}
								alt="John Mayer Photo"
							/>
							<div className="right">
								<p>
									In 2031, Altium took a group of students to the stratosphere.
									Throughout the whole trip is was all about the students.
								</p>
								<h3>~John Mayer</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Emmerling-1.jpg?v=1673518431886"
								}
								alt="Carla Jenkins Photo"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									Last fall, we held a company raffle for two tickets to the
									Moon. The nurse that won had a blast on her trip. Because of
									Altium, space is the new big vacation.
								</p>
								<h3>~Carla Jenkins</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Crosby.jpg?v=1673518414521"
								}
								alt="Denise Whaler Photo"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									Our quartet was looking for something unique to showcase our
									talents. With Altium, we became the first quartet to perform
									in space.🎻
								</p>
								<h3>~Denise Whaler</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Durham-1.jpg?v=1673518423559"
								}
								alt="Josh Kent Photo"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									As a thank you from the city, we offered our law enforcement
									the opportunity to go to space. Altium made it easy to
									schedule and was very respectful.
								</p>
								<h3>~Josh Kent</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/cat.jpg?v=1673530109000"
								}
								alt="Adam Johannes Profile Photo (Cat)"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									Altium&apos;s prices rival a vacation to Europe, so naturally I took my family to space.
									It was quite the experience &dash; would recommend.
								</p>
								<h3>~Adam Johan</h3>
							</div>
						</div>
						{/* Must be identical to above (if you add more change the number under .slider) */}
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/hiers.jpg?v=1673518435437"
								}
								height={50}
								width={50}
								alt="John Mayer Photo"
							/>
							<div className="right">
								<p>
									In 2031, Altium took a group of students to the stratosphere.
									Throughout the whole trip is was all about the students.
								</p>
								<h3>~John Mayer</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Emmerling-1.jpg?v=1673518431886"
								}
								alt="Carla Jenkins Photo"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									Last fall, we held a company raffle for two tickets to the
									Moon. The nurse that won had a blast on her trip. Because of
									Altium, space is the new big vacation.
								</p>
								<h3>~Carla Jenkins</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Crosby.jpg?v=1673518414521"
								}
								alt="Denise Whaler Photo"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									Our quartet was looking for something unique to showcase our
									talents. With Altium, we became the first quartet to perform
									in space.🎻
								</p>
								<h3>~Denise Whaler</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Durham-1.jpg?v=1673518423559"
								}
								alt="Josh Kent Photo"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									As a thank you from the city, we offered our law enforcement
									the opportunity to go to space. Altium made it easy to
									schedule and was very respectful.
								</p>
								<h3>~Josh Kent</h3>
							</div>
						</div>
						<div className="slide">
							<Image
								className="left"
								src={
									"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/cat.jpg?v=1673530109000"
								}
								alt="Adam Johannes Profile Photo (Cat)"
								height={50}
								width={50}
							/>
							<div className="right">
								<p>
									Altium's prices rival a vacation to Europe, so naturally I took my family to space.
									It was quite the experience &dash; would recommend.
								</p>
								<h3>~Adam Johan</h3>
							</div>
						</div>
					</div>
				</div>
				<p>
					Space flight is for everyone! Learn more about the process you will go
					through in our flights or view upcoming missions.
				</p>
				<div className="buttonCont">
					<Link href="#steps" className="button">
						What&apos;s Entailed?
					</Link>
					<Link href="/quote" className="button">
						View Missions
					</Link>
				</div>
			</div>
			<div className="steps" id="stepCont">
				<div className="svgBackground">
					<svg
						viewBox="0 0 295 3602"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M 148.5 0 V 338.5 C 183.2 344.5 253.9 372.4 259.5 436 V 326.5 V 560.5 C 261 566.3 258.2 580.6 235 591 C 211.8 601.4 107 595.3 57.5 591 C 51.2 588.8 38 581.6 36 570 C 34 558.4 35.2 492.5 36 461 H 18.5 C 13 460.8 2.2 463.5 3 475.5 C 3.8 487.5 3.3 508.2 3 517 C 2.7 521 5.4 529.4 18.5 531 C 31.6 532.6 196.3 531.7 277 531 C 281.3 530.3 290 526.6 290 517 C 290 507.4 290 485.3 290 475.5 C 290 470.7 287.4 461 277 461 C 266.6 461 263.3 461 263 461 V 691.5 C 263 744 148.5 761.5 148.5 869.5 V 1263 H 264.5 C 264.5 1272.5 269.6 1291.2 290 1290 V 1406 C 281.5 1408 264.5 1416.2 264.5 1433 H 26 C 26.8 1424 23.8 1406 5 1406 V 1290 C 12 1288.7 26 1281.4 26 1263 H 148.5 V 2142 L 131 2158 L 240 2278.5 L 279.5 2241 L 181 2136.5 L 205.5 2114.5 L 290.5 2199 L 120 2369.5 L 109.5 2359 L 87 2381.5 L 14 2308.5 L 38.5 2284 L 26 2271.5 L 58.5 2239 L 167 2347.5 C 186.5 2369.5 148.5 2379 148.5 2424.5 V 3017.5 C 180.3 3048 232.1 3134.3 184.5 3235.5 H 40.5 V 3196 L 92.5 3165 H 208 L 256 3196 V 3235.5 C 227.5 3227.7 170.4 3228.5 170 3294.5 C 169 3311.2 163.4 3345.2 149 3348 C 134.6 3350.8 127 3313.5 125 3294.5 H 149 V 3601.5 "
							stroke="white"
							strokeWidth="6"
							style={{ transition: "stroke-dashoffset 0.1s ease-out 0s", }}
							pathLength="1"
						/>
					</svg>
				</div>
				<div id="steps">
					<div className="text left">
						<h3>Schedule a Consultation</h3>
						<p>
							Going to space is an individual matter. We provide free, no
							commitment consultations to help you realize your goals.
						</p>
						<div className="buttonCont">
							<Link href="/quote#consult" className="button">
								Schedule Consultation
							</Link>
							<Link
								href="#steps2"
								className="buttonNext"
							>&darr;</Link>
						</div>
						{/* <Image src="https://cdn.glitch.global/3e382f9d-a3b6-424b-966a-b4704cfa4afc/astrosuit.svg?v=1670892262011" alt="Space Suit" height="400px" /> */}
					</div>
				</div>
				<div id="steps2">
					<div className="text right">
						<h3>Purchase Tickets</h3>
						<p>
							Get tickets for a mission that works for you. We offer three
							destinations: stratosphere, ISS, and the moon quarterly.
						</p>
						<div className="buttonCont">
							<Link href="/quote#missions" className="button">
								View Missions
							</Link>
							<Link
								href="#steps3"
								className="buttonNext"
							>&darr;</Link>
						</div>
					</div>
				</div>
				<div id="steps3">
					<div className="text left">
						<h3>Fitness & Training Course</h3>
						<p>
							To make sure you have the best time, we developed a short course
							to prepare you for space.
						</p>
						<div className="buttonCont">
							<Link href="/train" className="button">
								Preview Training
							</Link>
							<Link
								href="#steps4"
								className="buttonNext"
							>&darr;</Link>
						</div>
					</div>
				</div>
				<div id="steps4">
					<div className="text right">
						<h3>Countdown</h3>
						<p>
							That&apos;s it! It&apos;s launch day and you&apos;re ready. Arrive 2 hours before launch
							time and before you know it you&apos;ll be in space.
						</p>
					</div>
				</div>
			</div>
			<div className="packing" id="packing">
				<h2>Journeys</h2>
				<div className="cardCont">
					<div className="card">
						<div className="innerCard">
							<h3>Stratosphere</h3>
							<p>
								Take a day trip into space. You&apos;ll see amazing views and experience
								zero g without the hassle of being an astronaut.
							</p>
						</div>
						<Image
							src={
								"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/stratosphere.webp?v=1673519740927"
							}
							width={400}
							height={120}
							alt="Earth's Stratosphere"
						/>
					</div>
					<div className="card">
						<div className="innerCard">
							<h3>Moon</h3>
							<p>
								Take a three day trip into the frontier of space. Join the ranks
								of astronauts as you travel to the moon. Every guest has the
								opportunity to witness the galaxy on a space walk.
							</p>
						</div>
						<Image
							src={
								"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/moon-labyr-nth-deviantart-0.png?v=1673519854551"
							}
							width={400}
							height={120}

							alt="Full Moon"
						/>
					</div>
					<div className="card">
						<div className="innerCard">
							<h3>ISS</h3>
							<p>
								Looking for an extended stay in space? Spend two weeks in this
								weightless environment.
							</p>
						</div>
						<Image
							src={
								"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
							}
							width={400}
							height={120}

							alt="International Space Station in Front of the Earth"
						/>
					</div>
				</div>
				<div className="buttonCont">
					<Link href="/quote" className="button">
						See Prices
					</Link>
					<Link href="/about" className="button">
						Meet the Ships
					</Link>
				</div>

				<div className="spacerStatic"></div>

				<h2>The Packing List</h2>
				<p>
					Too soon to start packing? We do think so. Space travel does have to
					be complicated. Our space-ready course can be completed in{" "}
					<strong>2</strong> weeks, it&apos;s that simple.
				</p>
				<p>
					For any of our flights clients will take an brief online class
					followed by standard fitness testing.
				</p>

				<div className="buttonCont">
					<Link href="/course" className="button">
						View Course
					</Link>
				</div>

				<button type="button" className="collapsible">
					General
				</button>
				<div className="collapCont">
					<ul>
						<li>Passport & ID</li>
						<li>Lightweight Sweatshirt</li>
						<li>Camera</li>
						<li>Entertainment</li>
						<li>
							<ul>
								<li>Ear Protection</li>
								<li>Book</li>
							</ul>
						</li>
					</ul>
				</div>
				<button type="button" className="collapsible">
					For Longer Trips
				</button>
				<div className="collapCont">
					<ul>
						<li>Clothing</li>
					</ul>
				</div>
			</div>
			<div className="launch">
				<div className="textCont">
					<h2 className="text">Launch Dates</h2>
				</div>

				<h3>Next Date: March 15</h3>
				<p>
					Buy your ticket before our next launch date! Tickets close{" "}
					<strong>February 15</strong>.
				</p>
				<div className="buttonCont">
					<Link href="/ticket#dates" className="button">
						Upcoming Dates
					</Link>
					<Link href="/ticket#next" className="button">
						Get a Ticket
					</Link>
				</div>
			</div>
		</>
	);
}
