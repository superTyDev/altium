import Link from "next/link";
import * as React from "react";

import styles from "/styles/Sitemap.module.css";

export default function Sitemap() {
	return (
		<>
			<div className="navSpacer"></div>
			<div className={`page flex ${styles.linkCont}`}>
				<center>
				<h1 className={styles.fullWidth}>Sitemap</h1>
				</center>
				<div className="left">
					<h2>Main</h2>
					<Link href="/" className="button">
						Home
					</Link>
					<Link href="/quote" className="button">
						Buy a Ticket
					</Link>
					<Link href="/login" className="button">
						Login
					</Link>
					<Link href="/flights" className="button">
						Flights
					</Link>
				</div>
				<div className="right">
					<h2>Other</h2>
					<Link href="/about" className="button">
						About
					</Link>
					<Link href="/Contact" className="button">
						Contact
					</Link>
					<Link href="/cites" className="button">
						Cites
					</Link>
				</div>
			</div>
		</>
	);
}
