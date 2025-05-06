import React from 'react';
import Link from 'next/link';

const PrivacyPage: React.FC = () => {
	return (
		<div className="container mx-auto py-12 px-4 md:px-8 font-sans min-h-screen text-brand-white">
			<h1 className="text-4xl font-bold text-color-active mb-8 text-center">
				Privacy Policy
			</h1>

			<div className="max-w-3xl mx-auto space-y-6">
				<p className="text-brand-white/90 italic text-center mb-6">
					Last Updated: May 6, 2025
				</p>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						1. Introduction
					</h2>
					<p className="text-brand-white/90">
						This Privacy Policy outlines how the tools available on the Unofficial Rafldex Tools site (the "Tool(s)") handle information when you use them. This is an unofficial set of tools. While the data retrieved comes from the official Rafldex API, your privacy is important to us.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						2. Information We Do Not Collect
					</h2>
					<p className="text-brand-white/90">
						We do not collect, store, or process personal information such as your name, email address, IP address, or wallet addresses, except for their temporary retrieval via API requests. The only instance of wallet addresses being saved is when you, the user, choose to save them-this is the intended functionality of the Tool. The Tool operates entirely within your browser, and no user data is stored by us. While the Wallet Connection feature via Privy does allow for smart wallets to be created via their integration, we do not have access to your private keys, seed phrases, or any other sensitive information. We do not track your activity on the Tool(s) or any other site.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						3. Information You Provide
					</h2>
					<p className="text-brand-white/90">
						You may provide "Raffle ID(s)" or Solana wallet address(es) to the Tool(s). This data is used solely to query the public Rafldex API (<code>https://api.rafldex.io</code>) to fetch participant and related data. This information is not stored by us after retrieval, nor is it sent elsewhere except as part of a direct download by you, which is the intended use of the "Tool(s)." The Tool(s) are designed to be used in conjunction with the Rafldex platform, and any data you provide is used solely for that purpose.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						4. Interaction with Third-Party API
					</h2>
					<p className="text-brand-white/90">
						When you use the Tool(s), any "Raffle ID(s)" or Wallet Address(es) are transmitted directly to the Official Rafldex API for data retrieval. Your interaction with the Rafldex API is governed by Rafldex's own Terms of Service and Privacy Policy. We are not affiliated with Rafldex and are not responsible for their data practices, just as they are not responsible for ours.
					</p>
					<p className="text-brand-white/90 mt-2">
						You can review Rafldex's policies here:
						<br />
						<Link href="https://www.rafldex.io/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
							Rafldex Terms & Conditions
						</Link>
						<span className="text-brand-white/50"> | </span>
						<Link href="https://www.rafldex.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
							Rafldex Privacy Policy
						</Link>
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						5. Cookies and Local Storage
					</h2>
					<p className="text-brand-white/90">
						Our Tool(s) do not currently use cookies or local storage to enhance your experience. However, the Privy Wallet Connection feature DOES use cookies or local storage to facilitate authentication and wallet linking. This is governed by Privy's own Terms and Conditions & Privacy Policy, which you can review here:
						<br />
						<Link href="https://privy.io/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
							Privy Terms & Conditions
						</Link>
						<span className="text-brand-white/50"> | </span>
						<Link href="https://privy.io/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
							Privy Privacy Policy
						</Link>
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						6. Social Connect and Third-Party Authentication
						<br />
						( "OAuth 2.0" )
					</h2>
					<p className="text-brand-white/90">
						The Privy Wallet Connect Feature incorporates LogIn/Connection via E-Mail, SMS in US and Canada (International Soon), many wallet providers, as well as Google, Apple, X (Twitter), Farcaster, Discord, TikTok, Instagram, and Telegram. This is governed by Privy's policies as well as each Social Connection Provider accordingly by their Terms and Conditions & Privacy Policies. You can review these policies via the links below:
					</p>
					<div className="mt-4 space-y-3"> {/* Container for links with spacing */}
						<div>
							<Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Google Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Google Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Apple Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Apple Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://twitter.com/en/tos" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								X ( Twitter ) Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								X ( Twitter ) Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://farcaster.xyz/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Farcaster Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://farcaster.xyz/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Farcaster Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Discord Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Discord Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.tiktok.com/legal/page/row/terms-of-service/en" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								TikTok Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.tiktok.com/legal/page/row/privacy-policy/en" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								TikTok Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Instagram Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Instagram Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://telegram.org/tos" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Telegram Terms & Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Telegram Privacy Policy
							</Link>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						7. Data Usage
					</h2>
					<p className="text-brand-white/90">
						Data retrieved from the Rafldex API is processed in your browser and optionally exported by you as CSV or JSON files. No data is stored on our servers or shared with third parties beyond the API call to Rafldex. All data handling is done client-side, and we do not have access to any of your data unless you choose to share it with us directly. All data processed by Privy's Wallet Connection feature is governed by their policies, which you can review in the links provided above.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						8. Age Restrictions
					</h2>
					<p className="text-brand-white/90">
						While our platform is not a gambling site, Rafldex is. Because our tools are designed exclusively for use in conjunction with the Rafldex platform, we enforce a strict 21+ policy. If you are under 21, you are not permitted to use this site or its tools and we will not be held liable for any damages or losses incurred as a result of your use. By using the Tool(s), you confirm that you are at least 21 years old and agree to comply with this age restriction. If you are under 21, please refrain from using the Tool(s) and leave this site immediately. We reserve the right to take appropriate action if we become aware of any violations of this policy.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						9. Changes to This Policy
					</h2>
					<p className="text-brand-white/90">
						We may update this Privacy Policy occasionally. Any changes will be noted by the "Last Updated" date at the top of this page. Your continued use of the Tool(s) after changes are posted constitutes your acceptance of the updated policy. We encourage you to review this Privacy Policy periodically for any updates or changes.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						10. Contact Us
					</h2>
					<p className="text-brand-white/90">
						If you have questions about this Privacy Policy, please contact BEDLAM520 on X:
						<span className="text-brand-white/50"> </span>
						<Link href="https://x.com/bedlam520" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
							@bedlam520
						</Link>
					</p>
				</section>

				<div className="text-center mt-10">
					<Link href="/" className="text-color-active/80 hover:text-color-active hover:underline">
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPage;
