import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from './button';

const isMobile = /Mobi|Android/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');

const SolanaPaymentButton: React.FC = () => {
	const address = '3aLmd45HzUk5bZfCR1uKsawyVNGjarSKCkEnvjETaAPk';
	const paymentLink = `https://phantom.app/ul/send?recipient=${address}`;

	const handleClick = () => {
		if (isMobile) {
			window.location.href = paymentLink;
		}
	};

	return (
		<div style={{
			textAlign: 'center',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: 10,
			height: '400px',
			width: '300px',
			justifyContent: 'space-between',
			padding: '20px',
			marginBottom: '10px',
			marginLeft: 'auto',
			marginRight: 'auto',
			maxWidth: '400px',
			backgroundColor: 'font-dark'
		}}>
		{isMobile ? (
			<Button onClick={handleClick}>Pay with Solana</Button>
		) : (
			<div style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', gap: 10 }}>
			<p className="text-center text-color-active">Scan this QR code with your Solana wallet:</p>
			<QRCodeSVG value={paymentLink} size={200} />
			<p className="text-center text-color-active">Or click the button below:</p>
			<a href={paymentLink} style={{ color: '#6f4e37' }}>Open in Wallet</a>
			</div>
		)}
		</div>
	);
};

export default SolanaPaymentButton;
