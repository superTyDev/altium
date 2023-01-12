import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Altium Aeronautics</title>
				<meta property="og:title" content="Altium Aeronautics" key="title" />

				<meta charset="UTF-8" />
				<meta name="keywords" content="space, astronaut" />
				<meta name="author" content="T M, C A" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<Script src="https://kit.fontawesome.com/b02a1c9014.js"></Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
