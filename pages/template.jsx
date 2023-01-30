import Link from "next/link";
import * as React from "react";

/**
 * The template function defines the component that makes up the template page
 * This component will be attached to /template (because of the file & function name)
 */

export default function Template() {
	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<h1>Template</h1>
				<Link href="/" className="button">
					Home
				</Link>
			</div>
		</>
	);
}
