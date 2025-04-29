import React from 'react';
import { clsx } from 'clsx';

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
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
	data,
	format = 'csv',
	className,
	style,
	fileName = 'data'
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
			if (format === 'json') {
				blobContent = JSON.stringify(data, null, 2);
				mimeType = 'application/json';
			}
			else {
				blobContent = convertToCSV(data);
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
		}
		catch (error) {
			console.error(`Error preparing download data as ${format}:`, error);
		}
	};

	const convertToCSV = (arr: ParticipantData[]): string => {
		if (!arr || arr.length === 0) return '';

		try {
			const headers = ['userWalletAddress', 'ticketsBought'];
			const headerRow = headers.map(h => `"${h}"`).join(',');

			const dataRows = arr.map(row => {
				const wallet = `"${String(row.userWalletAddress || '').replace(/"/g, '""')}"`;
				const tickets = `"${String(row.ticketsBought ?? '')}"`;
				return [wallet, tickets].join(',');
			});

			return [headerRow, ...dataRows].join('\n');
		}
		catch (error) {
			console.error("Error converting data to CSV:", error);
			throw new Error("Failed to convert data to CSV format.");
		}
	};

	const isDisabled = !data || data.length === 0;

	const combinedClassName = clsx(
		'inline-flex items-center justify-center whitespace-nowrap rounded-brand text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans',
		'h-10 px-4 py-2',
		'bg-brand-green text-brand-dark hover:bg-brand-green/90 dark:bg-brand-green dark:text-brand-dark dark:hover:bg-brand-green/90',
		className
	);

	return (
		<button
		onClick={handleDownload}
		style={style}
		disabled={isDisabled}
		className={combinedClassName}
		>
		Download as {format.toUpperCase()}
		</button>
	);
};
