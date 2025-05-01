import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-T5ZH347W');`,
					}}
				/>
				<meta name="theme-color" content="#1a1a2e" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshotting." />
				<meta name="keywords" content="Rafldex, Solana, NFT, Raffle, Tools, Participants, Snapshot, Crypto" />
				<meta name="author" content="BEDLAM520" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Unofficial Rafldex Tools" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshotting." />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://rafldex-tools.pages.dev" />
				<meta name="twitter:title" content="Unofficial Rafldex Tools" />
				<meta name="twitter:description" content="Unofficial tools for interacting with the Rafldex platform, including participant snapshotting." />
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
						<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5ZH347W"
							height="0" width="0" style={{
									visibility: 'hidden',
									display: 'Hidden',
							}}>
						</iframe>
					</noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
