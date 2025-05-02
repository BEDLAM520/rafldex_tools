import React from 'react';
import Link from 'next/link';
import EthereumPaymentButton from '@/components/ui/EthereumPaymentButton';
import SolanaPaymentButton from '@/components/ui/SolanaPaymentButton';
import SuiPaymentButton from '@/components/ui/SuiPaymentButton';
import PayPalPaymentButton from '@/components/ui/PayPalPaymentButton';
import CashAppPaymentButton from '@/components/ui/CashAppPaymentButton';
import { Card } from '@/components/ui/card';

const BuyMeACoffee: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8 text-center font-sans min-h-screen flex flex-col items-center">
			<div className="flex flex-col items-center gap-4 w-full max-w-4xl">

				<img
					src="/images/coffee.png"
					alt="Coffee Cup Icon"
					className="w-32 md:w-40 mt-5 mb-5"
				/>

				<h1 className="text-3xl md:text-4xl font-bold text-color-active">Help me help you!</h1>
				<h2 className="text-2xl md:text-3xl font-bold text-color-active">Buy me a coffee!</h2>
				<h3 className="text-xl md:text-2xl font-bold text-color-active">Be a lot cooler if you did!</h3>

				<div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-5 mt-8 mb-4 w-full">
					<Card title="Ethereum" className="flex flex-col text-center w-full md:w-1/3 h-full">
						<EthereumPaymentButton />
					</Card>
					<Card title="Solana" className="flex flex-col text-center w-full md:w-1/3 h-full">
						<SolanaPaymentButton />
					</Card>
					<Card title="Sui" className="flex flex-col text-center w-full md:w-1/3 h-full">
						<SuiPaymentButton />
					</Card>
				</div>

				<div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-5 my-2 w-full md:w-2/3 lg:w-1/2">
					<Card title="PayPal" className="flex flex-col text-center w-full md:w-1/2">
						<PayPalPaymentButton />
					</Card>
					<Card title="CashApp" className="flex flex-col text-center w-full md:w-1/2">
						<CashAppPaymentButton />
					</Card>
				</div>

		<div className="mt-6 mb-8">
					<Link
						href="https://x.com/bedlam520"
						target="_blank"
						rel="noopener noreferrer"
						className="text-brand-white/80 hover:text-brand-white hover:underline"
					>
						Or Tip Me on X!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BuyMeACoffee;
