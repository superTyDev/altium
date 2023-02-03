import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import "../styles/globals.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../components/fbauth.js";

// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = themeName;
	if (themeName == "theme-light") {
		document.getElementById("slider").checked = true;
	}
}
// function to toggle between light and dark theme
function setCheckTheme(event) {
	if (event.target.checked) {
		setTheme("theme-light");
	} else {
		setTheme("theme-dark");
	}
}
// Immediately invoked function to set the theme on initial load

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

function onPageLoad() {
	linkDelays();

	(function () {
		if (localStorage.getItem("theme") === "theme-dark") {
			setTheme("theme-dark");
		} else {
			setTheme("theme-light");
		}
	})();
}

// Home function that is reflected across the site
export default function App({ Component, pageProps }) {
	const [user, loading, error] = useAuthState(auth);
	const [errors, setErrors] = useState([]); // { cont: [message], type: [name of Material UI icon], time: Date.now() }
	const [citesPopupStyles, setCitesPopupStyles] = useState({});

	useEffect(() => {
		window.addEventListener("scroll", darkNav);
		onPageLoad();
	}, []);

	function NavLoginButton({ onClick = () => {}, icon_name = false }) {
		if (user) {
			return (
				<Link href="/dashboard" onClick={onClick}>
					Dashboard
					{icon_name && <i>dashboard</i>}
				</Link>
			);
		} else {
			return (
				<Link href="/login" onClick={onClick}>
					Login
					{icon_name && <i>account_circle</i>}
				</Link>
			);
		}
	}

	function NavLogoutButton() {
		if (user) {
			return (
				<Link href="logout" onClick={closeNavLink}>
					Logout<i>logout</i>
				</Link>
			);
		}
	}

	function ErrorMessage() {
		const messages = errors.map(
			(error, n) =>
				error.time + 10 * 1000 > Date.now() && (
					<div
						className={error.type}
						key={n}
						style={{
							animationDelay: `${(error.time - Date.now()) / 1000 + 5}s`,
						}}
					>
						{error.cont}
						<i>{error.type}</i>
					</div>
				)
		);
		return <div className="errorMessage">{messages}</div>;
	}

	return (
		<>
			<Head>
				<title>Altium Aeronautics</title>
				<meta property="og:title" content="Altium Aeronautics" key="title" />
				<meta charset="UTF-8" />
				<meta name="description" content="Space flight for everyone." />
				<meta name="keywords" content="Altium, space" />
				<meta name="author" content="Tyson McLaws & Connor Altvater" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
						Altium Aero
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
				<NavLoginButton />
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
							About<i>info</i>
						</Link>
					</div>
					<div>
						<Link href="/flights" onClick={closeNavLink}>
							Our Flights<i>flight</i>
						</Link>
					</div>
					<div>
						<Link href="/about#ships" onClick={closeNavLink}>
							Our Ships<i>rocket</i>
						</Link>
					</div>
					<div>
						<Link href="/contact" onClick={closeNavLink}>
							Contact<i>call</i>
						</Link>
					</div>
					<div>
						<Link href="/training/0" onClick={closeNavLink}>
							Training<i>menu_book</i>
						</Link>
					</div>
					<div>
						<NavLoginButton onClick={closeNavLink} icon_name={true} />
					</div>
					<div>
						<NavLogoutButton />
					</div>
					<div className="spacer"></div>
					<div className="spacer"></div>
					<div className="spacer"></div>
					<div className="spacer"></div>
				</div>
			</div>
			<div className="content">
				{/* Router specifies which component to insert here as the main content */}
				<Component {...pageProps} errors={errors} setErrors={setErrors} />
				<ErrorMessage />
				<div className="citesPopup" style={citesPopupStyles}>
					<div className="text">
						<strong>Judges:</strong> View notebook, cites, and copyright
						checklist at <Link href="/cites">/cites</Link>.
					</div>
					<div
						className="close"
						onClick={(e) => {
							setCitesPopupStyles({ transform: "translateY(100vh)" });
						}}
					>
						<i>close</i>
					</div>
				</div>
			</div>
			{/* Footer links to Home and About, Link elements matched in router.jsx */}
			<footer className="footer">
				<div className="title">Altium Aeronautics</div>
				<div className="links">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/login">Login</Link>
					<Link href="/cites">Cites</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/contact">Feedback</Link>

					<Link href="/sitemap">Sitemap</Link>
				</div>
				<div className="switchContainer">
					<span>Theme</span>
					<label id="switch" className="switch">
						<input
							type="checkbox"
							onChange={(e) => {
								setCheckTheme(e);
							}}
							id="slider"
						/>
						<span className="slider round"></span>
					</label>
				</div>
				<div className="copyright"></div>
				<div className="copyright">
					Customer Support: 1 800 GET SPACE (438-7723)
					<br />© Tyson McLaws, Connor Altvater, Subham Patel 2033. No Rights
					Reserved.
				</div>
				<div></div>
			</footer>
		</>
	);
}
