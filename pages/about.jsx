import Image from "next/image";
import * as React from "react";

import styles from "../styles/About.module.css"

export default function About() {
	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<h1 className="title">About</h1>
				<div class="container">

					<div class="mySlides">
						<div class="numbertext">1 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} />
					</div>

					<div class="mySlides">
						<div class="numbertext">2 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} />
					</div>

					<div class="mySlides">
						<div class="numbertext">3 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} />
					</div>

					<div class="mySlides">
						<div class="numbertext">4 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} />
					</div>

					<div class="mySlides">
						<div class="numbertext">5 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} />
					</div>

					<div class="mySlides">
						<div class="numbertext">6 / 6</div>
						<Image src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={400} height={400} />
					</div>

					<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a class="next" onclick="plusSlides(1)">&#10095;</a>

					<div class="caption-container">
						<p id="caption"></p>
					</div>

					<div class="row">
						<div class="column">
							<Image class="demo cursor" src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onclick="currentSlide(1)" alt="The Woods" />
						</div>
						<div class="column">
							<Image class="demo cursor" src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onclick="currentSlide(2)" alt="Cinque Terre" />
						</div>
						<div class="column">
							<Image class="demo cursor" src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onclick="currentSlide(3)" alt="Mountains and fjords" />
						</div>
						<div class="column">
							<Image class="demo cursor" src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onclick="currentSlide(4)" alt="Northern Lights" />
						</div>
						<div class="column">
							<Image class="demo cursor" src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onclick="currentSlide(5)" alt="Nature and sunrise" />
						</div>
						<div class="column">a
							<Image class="demo cursor" src={"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"} width={100} height={100} onclick="currentSlide(6)" alt="Snowy Mountains" />
						</div>
					</div>
				</div>
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
			</div>
		</>
	);
}
