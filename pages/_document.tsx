import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
		<Head>
		<link rel="manifest" href="/manifest.json" />
		<script
		dangerouslySetInnerHTML={{
			__html: `
							<!-- Google tag (gtag.js) -->
							<script async src="https://www.googletagmanager.com/gtag/js?id=G-LB4B420FK0"></script>
							<script>
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-LB4B420FK0');
							</script>`,
		}}
		/>
		<meta name="theme-color" content="#B9FF66" />
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshots." />
		<meta name="keywords" content="Rafldex, Solana, NFT, Raffle, Tools, Participants, Snapshot, Crypto" />
		<meta name="author" content="BEDLAM520 Development" />
		<meta name="robots" content="index, follow" />
		<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
		<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Unofficial Rafldex Tools" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshots." />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:url" content="https://rafldex-tools.pages.dev" />
		<meta name="twitter:title" content="Unofficial Rafldex Tools" />
		<meta name="twitter:description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshots." />
		<link rel="manifest" href="/manifest.json" />
		<meta name="theme-color" content="#1a1a2e" />
		<link rel="apple-touch-icon" href="@/icons/apple-touch-icon.png" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="apple-mobile-web-app-title" content="Rafldex Tools" />
		<meta name="format-detection" content="telephone=no" />
		<link rel="icon" href="/favicon.ico" sizes="@/favicon.ico" />
		</Head>
		<body className="bg-background-dark">
		<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-LB4B420FK0"
		height="0" width="0" style={{
			visibility: 'hidden',
			display: 'hidden',
		}}>
		</iframe>
		</noscript>
		<Main />
		<NextScript />
		</body>
		</Html>
	);
}
