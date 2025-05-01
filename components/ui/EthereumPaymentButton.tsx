import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from './button';

const EthereumPaymentButton: React.FC = () => {
	const isMobile = /Mobi|Android/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');
	const address = '0xdece49eF08A75f02499d965a36eEAEfFCdD3D483';
	const paymentLink = `ethereum:${address}`;

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
			<Button onClick={handleClick}>Pay with Ethereum</Button>
		) : (
			<div style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', gap: 10 }}>
			<p className="text-center text-color-active">Scan this QR code with your Ethereum wallet:</p>
			<QRCodeSVG value={paymentLink} size={200} />
			<p className="text-center text-color-active">Or click the button below if you have a browser wallet extension:</p>
			<a href={paymentLink} style={{ color: '#6f4e37' }}>Open in Wallet</a>
			</div>
		)}
		</div>
	);
};

export default EthereumPaymentButton;
