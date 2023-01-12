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
