import React from 'react';

interface ParticipantData {
	userWalletAddress: string;
	ticketsBought: number;
}

interface TableProps {
	data: ParticipantData[];
	className?: string;
}

export const Table: React.FC<TableProps> = ({ data, className }) => {
	if (!Array.isArray(data) || data.length === 0) {
		return <p>No participant data available.</p>;
	}

	const headers = ["Wallet Address", "Tickets Bought"];

	return (
		<table className={`min-w-full border-collapse table-auto ${className}`}>
		<thead>
		<tr>
		{headers.map((header, index) => (
			<th key={index} className="px-4 py-2 border-b text-left font-semibold">
			{header}
			</th>
		))}
		</tr>
		</thead>
		<tbody>
		{data.map((row, rowIndex) => (
			<tr key={rowIndex} className="hover:bg-gray-50">
			<td className="px-4 py-2 border-b font-mono text-sm">
			{row.userWalletAddress}
			</td>
			<td className="px-4 py-2 border-b text-sm text-right">
			{row.ticketsBought}
			</td>
			</tr>
		))}
		</tbody>
		</table>
	);
};
