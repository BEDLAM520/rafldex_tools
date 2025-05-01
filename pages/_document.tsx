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
		<meta property="og:url" content="https://rafldex-tools.pages.dev" />
		<meta property="og:title" content="Unofficial Rafldex Tools" />
		<meta property="og:description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshots." />
		<meta property="og:image" content="/images/logo-1200x1200.png" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:url" content="https://rafldex-tools.pages.dev" />
		<meta name="twitter:title" content="Unofficial Rafldex Tools" />
		<meta name="twitter:description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshots." />
		<meta name="twitter:image" content="/images/logo-1200x1200.png" />
		<meta name="theme-color" content="#1a1a2e" />
		<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="apple-mobile-web-app-title" content="Rafldex Tools" />
		<link rel="icon" href="/favicon.ico" sizes="any" />
		<link href="/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
		<link href="/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
		<link href="/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
		</Head>
		<body className="bg-background-dark">
		<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-LB4B420FK0"
		height="0" width="0" style={{
			visibility: 'hidden',
			display: 'none',
		}}>
		</iframe>
		</noscript>
		<Main />
		<NextScript />
		</body>
		</Html>
	);
}
