import React from 'react';

interface EntrantData {
	address: string;
}

interface DownloadButtonProps {
	data: EntrantData[];
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

	const convertToCSV = (arr: EntrantData[]): string => {
		if (!arr || arr.length === 0) return '';

		try {
			const headerRow = '"Entrant Address"';

			const dataRows = arr.map(row =>
				`"${String(row.address || '').replace(/"/g, '""')}"`
			);

			return [headerRow, ...dataRows].join('\n');
		}
		catch (error) {
			console.error("Error converting data to CSV:", error);
			throw new Error("Failed to convert data to CSV format.");
		}
	};

	const isDisabled = !data || data.length === 0;

	return (
		<button
		onClick={handleDownload}
		style={style}
		disabled={isDisabled}
		className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
		>
		Download as {format.toUpperCase()}
		</button>
	);
};
