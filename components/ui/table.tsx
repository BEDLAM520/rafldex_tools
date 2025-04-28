import React from 'react';
import { clsx } from 'clsx';

interface ParticipantData {
	userWalletAddress: string;
	ticketsBought: number;
}

interface TableProps {
	data: ParticipantData[];
	className?: string;
	showTickets?: boolean;
}

export const Table: React.FC<TableProps> = ({ data, className, showTickets = false }) => {
	if (!Array.isArray(data) || data.length === 0) {
		return <p>No participant data available.</p>;
	}

	const headers = ["Wallet Address"];
	if (showTickets) {
		headers.push("Tickets Bought");
	}

	const wrapperClassName = clsx(
		'max-h-96',
		'overflow-y-auto',
		'border',
		'border-brand-dark/10',
		'rounded-brand',
		className
	);

	return (
		<div className={wrapperClassName}>
		<table className="min-w-full border-collapse table-auto">
		<thead>
		<tr>
		{headers.map((header, index) => (
			<th key={index} className="px-4 py-2 border-b text-left font-semibold sticky top-0 bg-brand-white z-10">
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
			{showTickets && (
				<td className="px-4 py-2 border-b text-sm text-right">
				{row.ticketsBought}
				</td>
			)}
			</tr>
		))}
		</tbody>
		</table>
		</div>
	);
};
