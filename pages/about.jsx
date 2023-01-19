import Image from "next/image";
import * as React from "react";

import styles from "../styles/About.module.css"

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n = 1) {
	let i;
	let slides = document.getElementsByClassName(styles.mySlides);
	let dots = document.getElementsByClassName(styles.demo);
	let captionText = document.getElementById("caption");

	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }

	if (slides.length) {
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].classList.remove("active");
		}

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("active");
		captionText.innerHTML = dots[slideIndex - 1].alt;
	}
}

function onPageLoad() {
	showSlides(slideIndex);
}

export default function About() {
	if (typeof window !== "undefined") {
		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad);
		}
	}

	return (
		<>
			<div className="navSpacer"></div>
			<div>
				<h1 className="title">About</h1>
				<div className={styles.container}>

					<div className={styles.mySlides}>
						<div className={styles.numbertext}>1 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} alt="Final Configuration of ISS" />
					</div>

					<div className={styles.mySlides}>
						<div className={styles.numbertext}>2 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} alt="Final Configuration of ISS" />
					</div>

					<div className={styles.mySlides}>
						<div className={styles.numbertext}>3 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} alt="Final Configuration of ISS" />
					</div>

					<div className={styles.mySlides}>
						<div className={styles.numbertext}>4 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} alt="Final Configuration of ISS" />
					</div>

					<div className={styles.mySlides}>
						<div className={styles.numbertext}>5 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} alt="Final Configuration of ISS" />
					</div>

					<div className={styles.mySlides}>
						<div className={styles.numbertext}>6 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} alt="Final Configuration of ISS" />
					</div>

					<a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
					<a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>

					<div className={[styles.caption, styles.container].join(" ")}>
						<p id="caption"></p>
					</div>

					<div className={styles.row}>
						<div className={styles.column}>
							<Image className={[styles.demo, styles.cursor].join(" ")} src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onClick={() => currentSlide(1)} alt="The Woods" />
						</div>
						<div className={styles.column}>
							<Image className={[styles.demo, styles.cursor].join(" ")} src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onClick={() => currentSlide(2)} alt="Cinque Terre" />
						</div>
						<div className={styles.column}>
							<Image className={[styles.demo, styles.cursor].join(" ")} src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onClick={() => currentSlide(3)} alt="Mountains and fjords" />
						</div>
						<div className={styles.column}>
							<Image className={[styles.demo, styles.cursor].join(" ")} src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onClick={() => currentSlide(4)} alt="Northern Lights" />
						</div>
						<div className={styles.column}>
							<Image className={[styles.demo, styles.cursor].join(" ")} src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onClick={() => currentSlide(5)} alt="Nature and sunrise" />
						</div>
						<div className={styles.column}>
							<Image className={[styles.demo, styles.cursor].join(" ")} src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onClick={() => currentSlide(6)} alt="Snowy Mountains" />
						</div>
					</div>
				</div >
				<div className="card">
					<div className="left">
						<Image
							src={
								"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/saturnv-crosssection.png?v=1673518459567"
							}
							alt="Saturn V Cross Section"
							width={250}
							height={250}
						/>
					</div>
					<div className="right"></div>
				</div>
			</div >
		</>
	);
}
