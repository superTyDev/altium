import Link from "next/link";
import React, { useEffect } from "react";

// import styles from "/styles/Training.module.css";

export default function Training() {
	return (
		<>
			<div className="navSpacer"></div>
			<div className="page">
				<h1>Training</h1>
				<p>
					Get easy access to training material. Our two week course provides you
					with all the information you&apos;ll need to safely travel to space.
				</p>
				<div className="buttonCont">
					<Link className="button" href="/training/1">
						View Sample Lesson
					</Link>
					<Link className="button" href="/quote">
						Buy a Ticket
					</Link>
				</div>
			</div>
		</>
	);
}
