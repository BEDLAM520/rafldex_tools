import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const PrivacyPage: React.FC = () => {
	return (
		<div className="container mx-auto py-12 px-4 md:px-8 font-sans min-h-screen text-brand-white">
		<h1 className="text-4xl font-bold text-color-active mb-8 text-center">Privacy Policy</h1>

		<div className="max-w-3xl mx-auto space-y-6">
		<p className="text-brand-white/90 italic text-center mb-6">Last Updated: April 29, 2025</p>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">1. Introduction</h2>
		<p className="text-brand-white/90">
		This Privacy Policy describes how the tools found within the Unofficial Rafldex Tools site, (the "Tool(s)"), handle information when you use them. This is an unofficial set of tools, and while the data retrieved is from an Official Rafldex API, your privacy is important to us.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">2. Information We Do Not Collect</h2>
		<p className="text-brand-white/90">
		We do not directly collect, store, or process any personal information about you, such as your name, email address, IP address, or wallet addresses beyond their temporary retrevial via API requests. The only instance of wallet addresses being saved is by the user which is the intended use of the tool. No other data is stored in any way. The Tool operates primarily within your browser.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">3. Information You Provide</h2>
		<p className="text-brand-white/90">
		You provide "Raffle ID(s)" or/aka the Solana address(es) to the Tool(s). This information is used solely to query the public Rafldex API (`https://api.rafldex.io`) to fetch participant and/or other requested data. This information is not stored by our Tool after your session ends or the data is fetched and only leaves our site via user download which is the indended purpose.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">4. Interaction with Third-Party API</h2>
		<p className="text-brand-white/90">
		When you use the Tool(s), the "Raffle ID(s)" you enter are sent to the official Rafldex API to retrieve the requested data. Your interaction with the Rafldex API, via the Tool(s) contained within, is subject to Rafldex's own Terms of Service and Privacy Policy. We are not responsible for the data handling practices of Rafldex. Nor is Rafldex responsible for the data handling practices of our site.
		</p>
		<p className="text-brand-white/90 mt-2">You can review Rafldex's Terms and Policies here:
		<Link href="https://www.rafldex.io/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
		Terms & Conditions
		</Link>
		<span className="text-brand-white/50"> | </span>
		<Link href="https://www.rafldex.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
		Privacy Policy
		</Link>
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">5. Cookies and Local Storage</h2>
		<p className="text-brand-white/90">
		This Tool does not currently use cookies or browser local storage to track you or store your personal information.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">6. Data Usage</h2>
		<p className="text-brand-white/90">
		The participant data fetched from the Rafldex API is displayed directly to you in your browser and is used to generate CSV or JSON files if you choose to download them. This data is not transmitted to our servers or any other third party (other than the initial request to the Rafldex API).
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">7. Changes to This Policy</h2>
		<p className="text-brand-white/90">
		We may update this Privacy Policy from time to time. Any changes will be reflected by the "Last Updated" date at the top of this policy.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">8. Contact Us</h2>
		<p className="text-brand-white/90">
		If you have any questions about this Privacy Policy, please contact BEDLAM520 on X here;<span className="text-brand-white/50">  </span>
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
