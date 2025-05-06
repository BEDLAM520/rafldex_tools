import React from 'react';
import Link from 'next/link';
import { Container } from 'lucide-react';

const TermsPage: React.FC = () => {
	return (
		<div className="container mx-auto py-12 px-4 md:px-8 font-sans min-h-screen text-brand-white">
			<h1 className="text-4xl font-bold text-color-active mb-8 text-center">
				Terms and Conditions
			</h1>

			<div className="max-w-3xl mx-auto space-y-6">
				<p className="text-brand-white/90 italic text-center mb-6">
					Last Updated: May 6, 2025
				</p>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						1. Acceptance of Terms
					</h2>
					<p className="text-brand-white/90">
						By accessing and using the Rafldex Tools website (the "Tool(s)"), you agree to be legally bound by these Terms and Conditions. If you do not agree, please do not use the Tool(s).
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						2. Tool Description and Nature
					</h2>
					<p className="text-brand-white/90">
						This Tool is a third-party, unofficial interface designed to enhance the experience of interacting with the Rafldex platform. It is not affiliated with, endorsed by, or sponsored by Rafldex or its creators. All usage is entirely at your own discretion.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						3. Wallet and Social Login Integration
					</h2>
					<p className="text-brand-white/90">
						We utilize <strong>Privy</strong> for secure authentication and wallet connection. This includes login and wallet linking via Ethereum (EVM) or Solana, as well as via social and contact providers such as Google, Apple ( Soon ), SMS ( USA & Canada ONLY [ Inernational Soon ] ), Telegram, Discord, X ( Twitter ), Instagram ( Meta ), TikTok, and Farcaster. Use of these third-party authentication methods is governed by the respective platforms' terms and privacy policies, which you agree to by using them. Links to these policies can be found on their respective websites and are also listed below.
					</p>
					<p className="text-brand-white/90 mt-2">
						We do not store your private keys or seed phrases and do not have access to user funds. You are responsible for securing your own wallet and login credentials. By using the Tool, you acknowledge that you understand the risks associated with Web3 and third-party integrations. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb">
						4. Digital Products & Purchases
					</h2>
					<p className="text-brand-white/90">
						Users may support the project or purchase digital products via our tiered "Buy Me A Coffee!" system using connected wallets. These purchases are considered voluntary and non-refundable. No guarantees of value, performance, or deliverables are implied. These digital purchases are not financial instruments or investments. By making a purchase, you acknowledge that you understand the nature of these transactions and agree to the terms outlined here. This feature is intended to support the development of the Tool and its features, and any funds received will be used at our discretion to further enhance the Tool and its offerings. I, BEDLAM520, Thank You for your support and for using the Tool. Your contributions help us continue to improve and innovate.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						5. "You Are Gonna Make It, or, REKT AF" ( PNL Analysis )
					</h2>
					<p className="text-brand-white/90">
						The Tool offers a feature that calculates an estimated PNL (Profit and Loss) summary based on your past interaction with the Rafldex platform. This can be accessed by connecting a wallet or manually entering a wallet address. The results are based on available data from the Rafldex API and should not be treated as financial advice or a guarantee of accuracy. The PNL analysis is for informational and entertainment purposes only and should not be relied upon for making financial decisions. You acknowledge that the Tool is not a financial advisor and that any decisions made based on the PNL analysis are solely your responsibility. We do not guarantee the accuracy or completeness of the PNL analysis, and we disclaim any liability for any losses or damages resulting from your reliance on this feature.
					</p>,
					<p className="text-brand-white/90 mt-2">
						We disclaim all liability for financial interpretations or decisions made using this feature. It is purely informative and for entertainment purposes only. You should not rely on it for any financial decisions. Always consult a qualified financial advisor before making any investment or trading decisions. We are not responsible for any losses or damages resulting from your use of this feature. By using the Tool, you acknowledge that you understand the risks associated with Web3 and third-party integrations. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						6. Data Accuracy
					</h2>
					<			p className="text-brand-white/90">
						The Tool pulls data directly from the public Rafldex API (<code>https://api.rafldex.io</code>). We do not warrant the accuracy, availability, or timeliness of any data shown. The data is provided "as is" and may contain errors, outdated information, or omissions beyond our control.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						7. Third-Party Policies
					</h2>
					<p className="text-brand-white/90">
						Your interactions with the Rafldex API and any third-party login or wallet services are subject to their own Terms and Conditions & Privacy Policies. We assume no responsibility for the security or practices of those services. You can view Rafldex's policies here, and the third-party services' policies below:
					</p>
					<hr className="my-3 border-brand-white/30" />
					<Container className="mt-4 space-y-3">
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.rafldex.io/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Rafldex Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.rafldex.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Rafldex Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://privy.io/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Privy Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://privy.io/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Privy Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Google Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Google Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Apple Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Apple Privacy Policy
							</Link>
						</div>												<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://twitter.com/en/tos" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								X ( Twitter ) Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								X ( Twitter ) Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://farcaster.xyz/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Farcaster Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://farcaster.xyz/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Farcaster Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Discord Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Discord Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.tiktok.com/legal/page/row/terms-of-service/en" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								TikTok Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.tiktok.com/legal/page/row/privacy-policy/en" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								TikTok Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Instagram Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Instagram Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
						<div>
							<Link href="https://telegram.org/tos" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Telegram Terms and Conditions
							</Link>
							<span className="text-brand-white/50 mx-1"> | </span>
							<Link href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-white/80 hover:text-brand-white hover:underline">
								Telegram Privacy Policy
							</Link>
						</div>
						<hr className="my-3 border-brand-white/30" />
					</Container>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">8. Security</h2>
					<p className="text-brand-white/90">
						We make reasonable efforts to secure your interactions with the Tool and integrate authentication through a secure third-party platform ( Privy ). However, we cannot guarantee the absolute security of your data or wallet interactions. You acknowledge and accept the inherent risks of Web3 and third-party integrations. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">9. No Warranty</h2>
					<p className="text-brand-white/90">
						This Tool is provided "as is" and "as available" with no warranties, express or implied. We disclaim any warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Tool will be error-free, secure, or uninterrupted. You use the Tool at your own risk. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						10. Limitation of Liability
					</h2>
					<p className="text-brand-white/90">
						In no event shall the developers or maintainers of this Tool be liable for any damages arising out of or in connection with your use of the Tool, including but not limited to loss of data, digital assets, profits, or goodwill, whether based on contract, tort, strict liability, or otherwise. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services. We are not responsible for any loss of funds or data resulting from your use of the Tool or any third-party services. As with any Web3 application, you should only connect wallets or accounts that you are comfortable with and understand the risks involved. Please always do your own research and exercise caution when using any Web3 tools or services.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						11. Changes to Terms
					</h2>
					<p className="text-brand-white/90">
						current version will always be posted on this page. Continued use of the Tool constitutes your acceptance of any changes. We reserve the right to modify or discontinue the Tool at any time without notice.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-color-active mb-3">
						12. Contact
					</h2>
					<p className="text-brand-white/90">
						If you have questions about these Terms, please reach out to BEDLAM520 on X at:
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

export default TermsPage;
