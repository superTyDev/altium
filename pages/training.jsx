import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

// import styles from "/styles/Training.module.css";

export default function Training() {
	const router = useRouter();

	useEffect(() => {
		router.push("/training/0");
	}, [router]);

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
					<Link className="button" href="/training/1/1">
						View Sample Lesson 1
					</Link>
					<Link className="button" href="/training/4/1">
						View Sample Lesson 2
					</Link>
					<Link className="button" href="/quote">
						Buy a Ticket
					</Link>
				</div>
			</div>
		</>
	);
}
