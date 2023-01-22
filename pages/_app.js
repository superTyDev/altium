import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "../styles/globals.css";

function darkNav() {
	if (window.scrollY > 15) {
		document.querySelector("nav").classList.add("scrolled");
	} else {
		document.querySelector("nav").classList.remove("scrolled");
	}
}

function closeNav(e) {
	e = window.event || e;
	if (document.body === e.target) {
		document.querySelector(".sideNav").classList.remove("expand");
	}
}
function closeNavLink(e) {
	document.querySelector(".sideNav").classList.remove("expand");
}

function linkDelays() {
	var container = document.querySelector(".sideNavInner").children;

	var c = 0;
	for (let elem of container) {
		elem.style.transitionDelay = `${c / 4}s`;
		c++;
	}
}

// Home function that is reflected across the site
export default function App({ Component, pageProps }) {
	useEffect(() => {
		window.addEventListener("scroll", darkNav);

		if (document.readyState === "complete") {
			linkDelays();
		} else {
			window.addEventListener("load", linkDelays);
			return () => document.removeEventListener("load", linkDelays);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Altium Aeronautics</title>
				<meta property="og:title" content="Altium Aeronautics" key="title" />
			</Head>
			<nav>
				<Link href="/" id="logo">
					<h2>
						<Image
							height={24}
							width={24}
							src={
								"https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/touch-icon.png?v=1673518459398"
							}
							alt="Eagle Icon"
						/>
						Altium Aeronautics
					</h2>
				</Link>
				<Link
					href="#menu"
					onClick={(e) => {
						document.querySelector(".sideNav").classList.toggle("expand");
					}}
				>
					☰
				</Link>
				<Link href="/login">Login</Link>
				<Link href="/quote">Buy a Ticket</Link>
			</nav>
			<div className="sideNav">
				<div className="sideNavInner">
					<div>
						<h2>
							Menu
							<span id="closeMenu" onClick={closeNavLink}>
								&#x2715;
							</span>
						</h2>
					</div>
					<div>
						<hr />
					</div>
					<div>
						<Link href="/about" onClick={closeNavLink}>
							About<i className="fa-solid fa-circle-info"></i>
						</Link>
					</div>
					<div>
						<Link href="/services" onClick={closeNavLink}>
							Services<i className="fa-solid fa-handshake-simple"></i>
						</Link>
					</div>
					<div>
						<Link href="/contact" onClick={closeNavLink}>
							Contact <i className="fa-solid fa-phone"></i>
						</Link>
					</div>
					<div>
						<Link href="/login" onClick={closeNavLink}>
							Login <i className="fa-solid fa-circle-user"></i>
						</Link>
					</div>
					<div>
						<Link href="/dashboard" onClick={closeNavLink}>
							Dashboard <i className="fa-solid fa-chart-line"></i>
						</Link>
					</div>
					<div>
						<Link href="/calendar" onClick={closeNavLink}>
							Calendar <i className="fa-solid fa-calendar-day"></i>
						</Link>
					</div>
					<div className="spacer"></div>
				</div>
			</div>
			<div className="content">
				{/* Router specifies which component to insert here as the main content */}
				<Component {...pageProps} />
			</div>
			{/* Footer links to Home and About, Link elements matched in router.jsx */}
			<footer className="footer">
				<div className="title">Altium Aeronautics</div>
				<div className="links">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/login">Login</Link>
					<Link href="/cites">Cites</Link>
					<Link href="/map">Map</Link>
					<Link href="/feedback">Feedback</Link>
					<Link href="/sitemap">Sitemap</Link>
				</div>
				<div className="copyright">
					© Tyson McLaws, Connor Altvater 2033. No Rights Reserved.
				</div>
				<div></div>
			</footer>
		</>
	);
}
