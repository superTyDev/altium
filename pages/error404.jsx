import * as React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Catch all page not found (404)
 */

export default function Error404() {
	return (
		<>
			<div className="navSpacer"></div>
			<center className="page">
				<h1>404 Error: Page Not Found</h1>
				<p>We can take you to space but not to that page.</p>
				<p>
					Try going <Link href="/">home.</Link>
				</p>
				<Image
					src={
						"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/poster.webp?v=1673518453030"
					}
					width={500}
					height={500}
					style={{ margin: "auto", width: "50%" }}
					alt="Saturn V Rocket Perspective Rendering"
				/>
			</center>
		</>
	);
}
