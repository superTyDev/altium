import Image from "next/image";
import Script from "next/script";
import * as React from "react";

// const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });
function rotateEarth(evt) {
	var earth = document.querySelector("#model");

	const earthRect = earth.getBoundingClientRect();
	const center_x = earthRect.right + earthRect.width / 2;

	var mouse_x = evt.pageX;
	var distance = ((center_x - mouse_x) / earthRect.width) * 360;
	earth.setAttribute("camera-orbit", `${distance}deg 70deg 100%`);
}

// modified 9/28/22
export default function Map() {
	if (typeof window !== "undefined") {
		document.addEventListener("mousemove", rotateEarth);
	}

	return (
		<>
			<Script
				type="module"
				src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
			></Script>

			<div className="navSpacer"></div>
			<div className="page">
				<div className="hero">
					<div className="heroBackground">
						<model-viewer
							id="model"
							src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/Earth_1_12756.glb?v=1673518445347"
							environment-image="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/cubemap.webp?v=1673518418783"
							skybox-image="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/cubemap.webp?v=1673518418783"
							exposure="2"
						>
							<div className="progress-bar hide" slot="progress-bar">
								<div className="update-bar"></div>
							</div>
						</model-viewer>
					</div>
				</div>
			</div>
			<center>
				<h1>For more information</h1>
			</center>
			<div>
				<div>
					<p>hello</p>
					<p>https://solarsystem.nasa.gov/moons/earths-moon/overview/</p>
					<div classname="heroRight">
						<div className="spacer"></div>
						<Image
							src={
								"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/istockphoto-1314510269-612x612.jpg?v=1673518439305"
							}
							width={400}
							height={400}
							alt="Full Moon Photo"
						/>
						<div className="spacer"></div>
					</div>
				</div>
			</div>
		</>
	);
}
