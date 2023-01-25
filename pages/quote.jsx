import Image from "next/image";
import * as React from "react";

import styles from "../styles/Quote.module.css";

export default function Quote() {
	return (
		<>
			<div className="navSpacer"></div>
			<div className="page flex">
				<div className="right">
					<h1 className="title">Buy Tickets</h1>
				</div>
				<div className="left">
					<div className={styles.solarSystem}>
						<div className={styles.moon}></div>
						<div className={styles.iss}></div>
						<div className={styles.strat}></div>
						<div className={styles.earth}>
							<Image
								className={styles.backgroundImage}
								src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/earth.webp?v=1674686609885"
								width={400}
								height={400}
								alt="Earth"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
