import React from 'react';
import Link from 'next/link';

const TermsPage: React.FC = () => {
	return (
		<div className="container mx-auto py-12 px-4 md:px-8 font-sans min-h-screen text-brand-white">
		<h1 className="text-4xl font-bold text-color-active mb-8 text-center">Terms and Conditions</h1>

		<div className="max-w-3xl mx-auto space-y-6">
		<p className="text-brand-white/90 italic text-center mb-6">Last Updated: April 29, 2025</p>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">1. Acceptance of Terms</h2>
		<p className="text-brand-white/90">
		By accessing and using the tools found within the Unofficial Rafldex Tools site, (the "Tool(s)"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Tool(s).
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">2. Disclaimer</h2>
		<p className="text-brand-white/90">
		This Tool is an unofficial, third-party application and while we directly retrieve the data from the Official Rafldex API, our site is NOT affiliated with, endorsed by, or sponsored by the official Rafldex platform or its creators. Use this Tool at your own discretion.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">3. Data Accuracy</h2>
		<p className="text-brand-white/90">
		The data presented by this Tool is fetched directly from the public Rafldex API (`https://api.rafldex.io`). We do not guarantee the accuracy, completeness, timeliness, or availability of the data provided by the API. The data is provided "as is" without warranty of any kind.
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
		<h2 className="text-2xl font-semibold text-color-active mb-3">5. Use at Your Own Risk</h2>
		<p className="text-brand-white/90">
		Your use of this Tool and reliance on any information obtained through it is solely at your own risk. You are responsible for verifying the accuracy of the data and for any decisions or actions taken based on the information provided.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">6. No Warranty</h2>
		<p className="text-brand-white/90">
		The Tool is provided on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">7. Limitation of Liability</h2>
		<p className="text-brand-white/90">
		In no event shall the developers of this Tool be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if advised of the possibility of such damages), resulting from the use or the inability to use the Tool or the data provided.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">8. Changes to Terms</h2>
		<p className="text-brand-white/90">
		We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of the Tool after any changes constitutes your acceptance of the new terms. Any changes will be reflected by the "Last Updated" date at the top of these Terms.
		</p>
		</section>

		<section>
		<h2 className="text-2xl font-semibold text-color-active mb-3">9. Contact Us</h2>
		<p className="text-brand-white/90">
		If you have any questions about the Terms and Conditions, please contact BEDLAM520 on X here;<span className="text-brand-white/50">  </span>
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

export default TermsPage;
