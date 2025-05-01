import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from './button';

const EthereumPaymentButton: React.FC = () => {
	const isMobile = /Mobi|Android/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');
	const address = '0xdece49eF08A75f02499d965a36eEAEfFCdD3D483';

	const truncateAddress = (addr: string, start = 6, end = 6) => {
		return `${addr.slice(0, start)}...${addr.slice(-end)}`;
	};

	const paymentLink = `ethereum:${address}`;

	const handleClick = () => {
		if (isMobile) {
			window.location.href = paymentLink;
		}
	};

	return (
		<div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
		{isMobile ? (
			<Button onClick={handleClick}>Pay with Ethereum</Button>
		) : (
			<div className="flex flex-col items-center gap-3">
			<p className="text-center text-color-active">Scan this QR code with your Ethereum wallet:</p>
			<QRCodeSVG value={address} size={180} className="max-w-full" />
			<p className="text-center text-color-active">Or click the button below if you have a browser wallet extension:</p>
			<a href={paymentLink} style={{ color: '#6f4e37' }}>Open in Wallet</a>
			<p className="text-center text-color-active">Or copy the wallet address below:</p>
			<p className="text-yellow-800 break-words dark:text-yellow-300" title={address}>
			{truncateAddress(address)}
			</p>
			</div>
		)}
		</div>
	);
};

export default EthereumPaymentButton;
