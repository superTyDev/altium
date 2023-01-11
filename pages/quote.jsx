import * as React from "react";
import Image from "next/image";

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function About() {
	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<h1 className="title">Quote</h1>
				<div className="card">
					<div className="left">
						<Image
							src={
								"https://cdn.glitch.global/3e382f9d-a3b6-424b-966a-b4704cfa4afc/saturnv-crosssection.png?v=1664497145316"
							}
							alt="Saturn V Cross Section"
							width={250}
						/>
					</div>
					<div className="right"></div>
				</div>
			</div>
		</>
	);
}
