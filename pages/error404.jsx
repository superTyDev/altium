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
						"https://cdn.glitch.global/3e382f9d-a3b6-424b-966a-b4704cfa4afc/saturnv.webp?v=1664056676127"
					}
					width={500}
					style={{ margin: "auto", width: "50%" }}
					alt="Saturn V Rocket Perspective Rendering"
				/>
			</center>
		</>
	);
}
