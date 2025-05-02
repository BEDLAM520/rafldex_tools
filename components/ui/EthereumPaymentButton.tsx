import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from './button';

const EthereumPaymentButton: React.FC = () => {
	const isMobile = /Mobi|Android/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '');
	const address = '0xdece49eF08A75f02499d965a36eEAEfFCdD3D483';

	const [copyStatus, setCopyStatus] = useState<string | null>(null);
	const truncateAddress = (addr: string, start = 6, end = 6) => {
		return `${addr.slice(0, start)}...${addr.slice(-end)}`;
	};

	const paymentLink = `ethereum:${address}`;

	const handleClick = () => {
		if (isMobile) {
			window.location.href = paymentLink;
		}
	};

	const handleCopyAddress = async () => {
		try {
			await navigator.clipboard.writeText(address);
			setCopyStatus('Copied!');
			setTimeout(() => setCopyStatus(null), 1500);
		} catch (err) {
			console.error('Failed to copy address: ', err);
			setCopyStatus('Failed!');
			setTimeout(() => setCopyStatus(null), 1500);
		}
	};

	return (
		<div className="flex h-full flex-col items-center justify-between gap-3 p-3 text-center">
		{isMobile ? (
			<div className="flex h-full items-center justify-center">
			<Button onClick={handleClick}>Pay with Ethereum</Button>
			</div>		) : (
				<>
				<div className="flex flex-col items-center gap-2">
				<p className="text-center text-color-active text-sm">Scan QR with your ETH wallet:</p>
				<QRCodeSVG value={address} size={180} className="max-w-full" />
				</div>

				<div className="flex flex-col items-center gap-1 mt-2">
				<p className="text-center text-color-active text-sm">Or use a browser wallet:</p>
				<a href={paymentLink} className="text-brand-blue hover:underline text-sm mb-2">Open in Wallet</a>
				<p className="text-center text-color-active text-sm">Or click the address below to copy:</p>
				<p
				className="text-yellow-800 break-words dark:text-yellow-300 cursor-pointer hover:opacity-80 font-mono text-xs"
				title={address}
				onClick={handleCopyAddress}
				>
				{copyStatus === 'Copied!' ? <span className="text-green-500">Copied!</span> :
					copyStatus === 'Failed!' ? <span className="text-red-500">Failed!</span> :
					truncateAddress(address)}
					</p>
					</div>
					</>
				)}
				</div>
			);
		};

		export default EthereumPaymentButton;
