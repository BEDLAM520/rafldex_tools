import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from './button';

const PayPalPaymentButton = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const paypalBusinessEmail = '3WP37Y2VHQWHY';
	const itemName = 'Help me help you! Buy me a coffee!';
	const currencyCode = 'USD';
	const paypalDonateUrl = 'https://www.paypal.com/donate';
	const paypalDonateImageUrl = '/images/btn_donate_SM.gif';
	const pixelImageUrl = '/images/pixel.gif';

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.submit();
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
		}} >
			<form action={paypalDonateUrl} method="post" target="_blank" rel="noopener noreferrer" style={{
				textAlign: 'center',
			}} ref={formRef}>
				<input type="hidden" name="business" value={paypalBusinessEmail} />
				<input type="hidden" name="no_recurring" value="0" />
				<input type="hidden" name="item_name" value={itemName} />
				<input type="hidden" name="currency_code" value={currencyCode} />
					<Button
						onClick={handleSubmit}
						variant="default"
						aria-label="Pay with PayPal"
					>
						<Image
							src={paypalDonateImageUrl}
							alt="Pay with PayPal"
							width={74}
							height={21}
						/>
					</Button>
						<Image
							src={pixelImageUrl}
							alt="PayPal Pixel"
							width={1}
							height={1}
							style={{ display: 'none' }}
						/>
			</form>
		</div>
	);
};

export default PayPalPaymentButton;
