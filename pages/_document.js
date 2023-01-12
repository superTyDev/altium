import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Altium Aeronautics</title>
				<meta property="og:title" content="Altium Aeronautics" key="title" />

				{/* <Script src="https://kit.fontawesome.com/b02a1c9014.js"></Script> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
