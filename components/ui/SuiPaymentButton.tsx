import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const SuiPaymentButton: React.FC = () => {
	const address = '0xd73deade3cbb66fb54dc75a2313dea4cab4bd3891049aadc05f125b73ff7f08f';

	const truncateAddress = (addr: string, start = 6, end = 6) => {
		return `${addr.slice(0, start)}...${addr.slice(-end)}`;
	};

	return (
		<div className="flex h-full flex-col items-center justify-center gap-4 p-4 text-center">
		<div className="flex flex-col items-center gap-3">:
		<div style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', gap: 10 }}>
		<p className="text-center text-color-active">Scan this QR code to send SUI to:</p>
		<QRCodeSVG value={address} size={180} className="max-w-full" />
		<p className="text-center text-color-active">Or copy the wallet address below:</p>
		<p className="text-yellow-800 break-words dark:text-yellow-300" title={address}>
		{truncateAddress(address)}
		</p>
		</div>
		</div>
		</div>
	);
};

export default SuiPaymentButton;
