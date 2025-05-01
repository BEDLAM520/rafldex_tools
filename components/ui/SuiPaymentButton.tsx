import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const SuiPaymentButton: React.FC = () => {
	const address = '0xd73deade3cbb66fb54dc75a2313dea4cab4bd3891049aadc05f125b73ff7f08f';

	const truncateAddress = (addr: string, start = 6, end = 6) => {
		return `${addr.slice(0, start)}...${addr.slice(-end)}`;
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
		}}>:
			<div style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', gap: 10 }}>
				<p className="text-center text-color-active">Scan this QR code to send SUI to:</p>
					<QRCodeSVG value={address} size={200} />
						<p className="text-center text-color-active">Or copy the wallet address below:</p>
							<p style={{ color: '#6f4e37', wordWrap: 'break-word' }} title={address}>
								{truncateAddress(address)}
							</p>
			</div>
		</div>
	);
};

export default SuiPaymentButton;
