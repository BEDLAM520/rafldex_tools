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
		<div className="container mx-auto text-center font-sans min-h-screen flex flex-col items-center">
		<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '40px 20px',
			fontFamily: 'Mohave',
			gap: '20px',
		}}
		>
		<img
		src="/images/coffee.png"
		alt="Coffee Cup Logo"
		style={{ width: '150px', marginTop: '20px', marginBottom: '20px' }}
		/>
		<h1 className="text-center text-3xl font-bold my-2 text-color-active">Help me help you!</h1>
		<h2 className="text-center text-3xl font-bold my-2 text-color-active">Buy me a coffee!</h2>
		<h3 className="text-center text-3xl font-bold my-2 text-color-active">Be a lot cooler if you did!</h3>

		<div
		style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			gap: '20px',
			marginTop: '30px',
			marginBottom: '30px',
			width: '100%',
			justifyContent: 'center',
			marginLeft: 'auto',
			marginRight: 'auto',
		}}
		>
		<Card title="Ethereum" className="mx-auto text-center w-full max-w-xs">
		<EthereumPaymentButton />
		</Card>
		<Card title="Solana" className="mx-auto text-center w-full max-w-xs">
		<SolanaPaymentButton />
		</Card>
		<Card title="Sui" className="mx-auto text-center w-full max-w-xs">
		<SuiPaymentButton />
		</Card>
		</div>

		<div
		style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			gap: '20px',
			marginTop: '30px',
			marginBottom: '30px',
			width: '100%',
			justifyContent: 'center',
			marginLeft: 'auto',
			marginRight: 'auto',
		}}
		>
		<Card title="PayPal" className="mx-auto text-center w-full max-w-xs">
		<PayPalPaymentButton />
		</Card>
		<Card title="CashApp" className="mx-auto text-center w-full max-w-xs">
		<CashAppPaymentButton />
		</Card>
		</div>

		<div className="align-center flex flex-row justify-center mt-4 mb-6">
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
