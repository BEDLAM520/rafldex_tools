import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './button';

const CashAppPaymentButton: React.FC = () => {
	const cashAppUrl = 'https://cash.app/$GrindHarderAZ';
	const qrCodeImageUrl = '/images/cashapp-qrcode.png';
	const [isMobile, setIsMobile] = useState(false);
	const [showQrCode, setShowQrCode] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			const ua = navigator.userAgent;
				setIsMobile(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua));
		};

		checkMobile();
			window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	const handleButtonClick = () => {
		if (isMobile) {
			window.open(cashAppUrl, '_blank', 'noopener,noreferrer');
		} else {
			setShowQrCode(true);
		}
	};

	return (
		<div style={{
			textAlign: 'center',
				marginTop: '20px',
				marginBottom: '20px',
				display: 'flex',
				position: 'relative',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '10px',
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: '200px',
				backgroundColor: 'font-dark'
		}}>
		{!showQrCode && (
			<Button
				onClick={handleButtonClick}
				variant="default"
				aria-label="Pay with CashApp"
			>
				Pay with CashApp
			</Button>
		)}

		{showQrCode && (
			<div style={{ marginTop: '10px' }}>
				<Image
					src={qrCodeImageUrl}
					alt="My CashApp QR Code"
					width={200}
					height={200}
					style={{ borderRadius: '12px', maxWidth: '100%' }}
				/>
				<p style={{ marginTop: '10px' }} className="text-sm text-color-active/50">
					<a href={cashAppUrl} target="_blank" rel="noopener noreferrer">
						Pay on the Web
					</a>
				</p>
			</div>
		)}
		</div>
	);
};

export default CashAppPaymentButton;
