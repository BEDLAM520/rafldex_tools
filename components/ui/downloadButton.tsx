import React from 'react';
import { Button, ButtonVariant } from './button';

interface ParticipantData {
	userWalletAddress: string;
	ticketsBought: number;
}

interface DownloadButtonProps {
	data: ParticipantData[];
	format?: 'csv' | 'json';
	className?: string;
	style?: React.CSSProperties;
	fileName?: string;
	showTickets: boolean;
	variant?: ButtonVariant;
	children?: React.ReactNode;
	disabled?: boolean;
}

const convertToCSV = (arr: ParticipantData[], includeTickets: boolean): string => {
	if (!arr || arr.length === 0) return '';
	try {
		const headers = includeTickets
		? ['userWalletAddress', 'ticketsBought']
		: ['userWalletAddress'];
		const headerRow = headers.map(h => `"${h}"`).join(',');
		const dataRows = arr.map(row => {
			const wallet = `"${String(row.userWalletAddress || '').replace(/"/g, '""')}"`;
			const columns = includeTickets
			? [wallet, `"${String(row.ticketsBought ?? '')}"`]
			: [wallet];
			return columns.join(',');
		});
		return [headerRow, ...dataRows].join('\n');
	} catch (error) {
		console.error("Error converting data to CSV:", error);
		throw new Error("Failed to convert data to CSV format.");
	}
};

export const DownloadButton: React.FC<DownloadButtonProps> = ({
	data,
	format = 'csv',
	className,
	style,
	fileName = 'data',
	showTickets,
	variant,
	children,
	disabled
}) => {

	const handleDownload = () => {
		if (!data || data.length === 0) {
			console.warn("No data available to download.");
			return;
		}
		let blobContent: string;
		let mimeType: string;
		const fileExtension = format;
		try {
			const sourceData = data;
			if (format === 'json') {
				const jsonData = showTickets
				? sourceData
				: sourceData.map(({ userWalletAddress }) => ({ userWalletAddress }));
				blobContent = JSON.stringify(jsonData, null, 2);
				mimeType = 'application/json';
			} else {
				blobContent = convertToCSV(sourceData, showTickets);
				mimeType = 'text/csv';
			}
			const blob = new Blob([blobContent], { type: mimeType });
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = `${fileName}.${fileExtension}`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(link.href);
		} catch (error) {
			console.error(`Error preparing download data as ${format}:`, error);
		}
	};

	const isEffectivelyDisabled = disabled || !data || data.length === 0;

	return (
		<Button
			onClick={handleDownload}
			style={style}
			disabled={isEffectivelyDisabled}
			className={className}
			variant={variant}
			size="default"
			>
			{children ? children : `Download as ${format.toUpperCase()}`}
		</Button>
	);
};
